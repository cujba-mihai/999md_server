import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { UserInput } from './dto/user.input';
import encrypt from '../utils/encryption';
import { ConfigService } from '@nestjs/config';

import { Product, ProductDocument } from 'src/products/entities/product.entity';
import { CreateProductInput } from 'src/products/dto/create-product.input';
import {
  Category,
  CategoryDocument,
} from 'src/categories/entities/category.entity';
import {
  Subcategory,
  SubcategoryDocument,
} from 'src/subcategories/entities/subcategory.entity';

@Injectable()
export class UsersService {
  @Inject(ConfigService)
  public config: ConfigService;

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    @InjectModel(Subcategory.name)
    private subcategoryModel: Model<SubcategoryDocument>,
  ) {}

  async removeAll(): Promise<boolean> {
    await this.userModel.deleteMany({}).exec();
    return true;
  }

  async create(createUserDto: UserInput): Promise<User> {
    const userExists = !!(await this.userModel
      .findOne({ email: createUserDto.email })
      .exec());

    if (userExists) throw Error('User already exists');

    const encryptedPass = encrypt(
      createUserDto.password,
      this.config.get('CRYPTO_SECRET_KEY'),
    );

    const createdUser = await this.userModel.create({
      ...createUserDto,
      password: encryptedPass,
    });

    const user = await createdUser.save();

    return Promise.resolve(user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async findOneById(id: string): Promise<User> {
    return this.userModel.findById(id).lean();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel
      .findOne({ email })
      .populate({ path: 'products', model: 'Product' })
      .exec();
  }

  async createProduct(
    userId: string,
    product: CreateProductInput,
  ): Promise<User> {
    const category = await this.categoryModel.findById(product.category).exec();
    const subcategory = await this.subcategoryModel
      .findById(product.subcategory)
      .exec();
    const user = await this.userModel.findById(userId).exec();

    if (!category || !subcategory || !user) {
      throw Error('Invalid');
    }

    const createdProduct = await this.productModel.create({
      author: userId,
      ...product,
    });

    user.products.push(createdProduct);

    await user.save();

    return user;
  }
}
