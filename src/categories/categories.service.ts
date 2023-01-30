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

  async removeAll(): Promise<boolean> {
    try {
      await this.categoryModel.deleteMany({}).exec();
      return true;
    } catch (error) {
      return false;
    }
  }

  async findOne(id: string): Promise<Category | null> {
    return await this.categoryModel.findById(id).exec();
  }

  async createMany(
    createCategoriesInput: CreateCategoriesInput,
  ): Promise<CategoryDocument[]> {
    const { categoriesToAdd } = createCategoriesInput;

    await categoriesToAdd.reduce(async (promise, category) => {
      return promise.then(async () => {
        const categoryExists = await this.categoryModel.findOne({
          name: category,
        });

        if (categoryExists) return Promise.resolve('Category already exists');

        const createdCategory = await this.categoryModel.create({
          name: category,
        });

        await createdCategory.save();
      });
    }, Promise.resolve());

    const categories = await this.categoryModel
      .find({
        name: { $in: categoriesToAdd },
      })
      .exec();

    return categories;
  }

  async findAll() {
    return await this.categoryModel
      .find()
      .populate([
        {
          path: 'subcategories',
          populate: {
            path: 'childCategories',
          },
        },
      ])
      .exec();
  }
}
