import { Injectable } from '@nestjs/common';
import { CreateCategoriesInput } from './dto/create-categories.input';
import { Category, CategoryDocument } from './entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async createMany(
    createCategoriesInput: CreateCategoriesInput,
  ): Promise<CategoryDocument[]> {
    const { categoriesToAdd } = createCategoriesInput;

    await categoriesToAdd.reduce(async (promise, category) => {
      return promise.then(async () => {
        const createdCategory = await this.categoryModel.create({
          name: category,
        });

        await createdCategory.save();
      });
    }, Promise.resolve());

    const categories = await this.categoryModel.find({
      name: { $in: categoriesToAdd },
    });

    return categories;
  }

  async findAll() {
    return this.categoryModel.find().exec();
  }
}
