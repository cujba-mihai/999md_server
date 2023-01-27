import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProductInput: CreateProductInput) {
    const product = await this.productModel.create(createProductInput);

    return product;
  }

  async findAll() {
    const products = await this.productModel.find();

    return products;
  }

  async findOne(id: number) {
    const product = await this.productModel
      .findById(id)
      .populate(['author', 'category', 'subcategory'])
      .exec();

    return product;
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    const product = await this.productModel.findByIdAndUpdate(
      id,
      updateProductInput,
    );
    return product;
  }

  async remove(id: number) {
    const product = await this.productModel.findByIdAndRemove(id);

    return product;
  }
}
