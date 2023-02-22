import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductInput } from './dto/create-product.input';
import { GetByIdDTO } from './dto/get-by-id.dto';
import { ListProductsBySubcategoryDTO } from './dto/list-products-by-subcategory';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

const DEFAULT_POPULATE_FIELDS = ['author', 'category', 'subcategory'];

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProductInput: CreateProductInput) {
    const product = await this.productModel.create(createProductInput);

    return product;
  }

  async getProductsBySubcategory(query: ListProductsBySubcategoryDTO) {
    return await this.productModel
      .find({
        subcategory: query.subCategoryId,
      })
      .skip(query.offset)
      .limit(query.limit)
      .populate(DEFAULT_POPULATE_FIELDS)
      .exec();
  }

  async getProducts() {
    return await this.productModel
      .find({})
      .populate(DEFAULT_POPULATE_FIELDS)
      .exec();
  }

  async findAll() {
    const products = await this.productModel.find().exec();

    return products;
  }

  async findOne({ id }: GetByIdDTO) {
    const product = await this.productModel
      .findById(id)
      .populate({
        path: 'author',
      })
      .populate({
        path: 'category',
        populate: {
          path: 'subcategories',
        },
      })
      .populate({
        path: 'subcategory',
        populate: {
          path: 'childSubcategories',
        },
      })
      .exec();

    console.log('PRODUCT: ', product);

    return product;
  }

  async update(id: string, updateProductInput: UpdateProductInput) {
    const product = await this.productModel
      .findByIdAndUpdate(id, updateProductInput)
      .exec();
    return product;
  }

  async remove({ id }: GetByIdDTO) {
    const product = await this.productModel.findByIdAndRemove(id).exec();

    return product;
  }
}
