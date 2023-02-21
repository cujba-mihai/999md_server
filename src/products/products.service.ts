/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  DeepPartial,
  InjectQueryService,
  QueryService,
  RelationQueryService,
} from '@ptc-org/nestjs-query-core';
import { Model } from 'mongoose';
import { Category } from '../categories/entities/category.entity';
import { GetSubcategories } from '../subcategories/dto/get-subcategories.dto';
import { Subcategory } from '../subcategories/entities/subcategory.entity';
import { User } from '../users/users.schema';
import { CreateProductInput } from './dto/create-product.input';
import { GetProductDTO } from './dto/get-product.dto';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService extends RelationQueryService<Product> {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectQueryService(Product)
    queryService: QueryService<Product>,
    @InjectQueryService(Subcategory)
    subcategoriesQuery: QueryService<Subcategory>,
    @InjectQueryService(Category)
    categoriesQuery: QueryService<Category>,
  ) {
    super(queryService, {});
  }

  // TODO: Add guard to make it available only from User
  async create(createProductInput: CreateProductInput) {
    const product = await this.productModel.create(createProductInput);

    return product;
  }

  async findAll() {
    const products = await this.productModel.find().exec();

    return products;
  }

  async findOne(id: number) {
    const product = await this.productModel
      .findById(id)
      .populate(['author', 'category', 'subcategory'])
      .exec();

    return product;
  }

  async update(id: string, updateProductInput: UpdateProductInput) {
    const product = await this.productModel
      .findByIdAndUpdate(id, updateProductInput)
      .exec();
    return product;
  }

  async remove(id: number) {
    const product = await this.productModel.findByIdAndRemove(id).exec();

    return product;
  }
}

export class ProductQueryService extends RelationQueryService<Product> {
  constructor(
    @InjectQueryService(Product)
    queryService: QueryService<Product>,
    @InjectQueryService(Subcategory)
    subcategoriesQuery: QueryService<Subcategory>,
    @InjectQueryService(Category)
    categoriesQuery: QueryService<Category>,
  ) {
    super(queryService, {});
  }
}
