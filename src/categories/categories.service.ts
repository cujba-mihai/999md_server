import { Injectable } from '@nestjs/common';
import { CreateCategoriesInput } from './dto/create-categories.input';
import { Category, CategoryDocument } from './entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { SubcategoriesService } from '../subcategories/subcategories.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    private readonly subcategoriesService: SubcategoriesService,
  ) {}

  async removeAll(): Promise<boolean> {
    try {
      await this.categoryModel.deleteMany({}).exec();
      return true;
    } catch (error) {
      return false;
    }
  }

  getCategoryByName(categoryName: string) {
    return this.categoryModel
      .findOne({
        name: {
          $regex: `.*${categoryName}.*`,
          $options: 'gi',
        },
      })
      .populate({
        path: 'subcategories',
        populate: {
          path: 'childSubcategories',
        },
      });
  }

  async createCategory(category: CreateCategoryDTO) {
    const subcategories = await this.subcategoriesService.createSubcategories(
      category.subcategories,
    );

    const createdCategory = await this.categoryModel.create({
      ...category,
      subcategories,
    });

    return createdCategory;
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
        const categoryExists = await this.categoryModel
          .findOne({
            name: category,
          })
          .exec();

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

  findAll() {
    return this.categoryModel
      .find({})
      .populate({
        path: 'subcategories',
        populate: {
          path: 'childSubcategories',
        },
      })
      .lean();
  }
}
