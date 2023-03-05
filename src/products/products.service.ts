import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductInput } from './dto/create-product.input';
import { GetByIdDTO } from './dto/get-by-id.dto';
import { ListProductsByCategoryDTO } from './dto/list-products-by-category';
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

  getProductsByCategory(query: ListProductsByCategoryDTO) {
    return this.productModel
      .find({
        subcategory: query.categoryId,
      })
      .skip(query.offset)
      .limit(query.limit)
      .populate(DEFAULT_POPULATE_FIELDS)
      .lean();
  }

  getProductsBySubcategory(query: ListProductsBySubcategoryDTO) {
    return this.productModel
      .find({
        subcategory: query.subCategoryId,
      })
      .skip(query.offset)
      .limit(query.limit)
      .populate(DEFAULT_POPULATE_FIELDS)
      .lean();
  }

  async getProducts() {
    const products = await this.productModel
      .find({})
      .populate(DEFAULT_POPULATE_FIELDS)
      .lean()
      .exec();
    return products;
  }

  findAll() {
    return this.productModel.find().lean();
  }

  findOne({ _id }: GetByIdDTO) {
    return this.productModel
      .findById(_id)
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
      .lean();
  }

  async update(id: string, updateProductInput: UpdateProductInput) {
    return this.productModel.findByIdAndUpdate(id, updateProductInput).lean();
  }

  async remove({ _id }: GetByIdDTO) {
    return this.productModel.findByIdAndRemove(_id).lean();
  }
}
