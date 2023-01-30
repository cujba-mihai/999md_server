import { Injectable } from '@nestjs/common';
import { Mutation } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Category,
  CategoryDocument,
} from 'src/categories/entities/category.entity';
import { CreateSubcategoriesInput } from './dto/create-subcategories.input';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';
import { Subcategory } from './entities/subcategory.entity';

@Injectable()
export class SubcategoriesService {
  constructor(
    @InjectModel(Subcategory.name) private subcategoryModel: Model<Subcategory>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  create(createSubcategoryInput: CreateSubcategoryInput) {
    return this.subcategoryModel.create(createSubcategoryInput);
  }

  findAll() {
    return this.subcategoryModel
      .find({
        $expr: {
          $gt: [{ $size: '$childCategories' }, 0],
        },
      })
      .populate(['childCategories'])
      .populate({ path: 'parentCategory', model: 'Category' })
      .exec();
  }

  findOne(id: number) {
    return this.subcategoryModel.findById(id).exec();
  }

  update(id: number, updateSubcategoryInput: UpdateSubcategoryInput) {
    return this.subcategoryModel.findByIdAndUpdate(id, updateSubcategoryInput);
  }

  async createSubcategories(
    parentCategory: string,
    subcategories: CreateSubcategoriesInput[],
    name: string,
  ) {
    const parent = await this.categoryModel.findOne({ name: parentCategory });

    if (!parent) {
      throw new Error(`Parent category with name ${parentCategory} not found`);
    }
    const createdSubcategories = await Promise.all(
      subcategories.map(async (subcategory) => {
        const category = await this.subcategoryModel.create({
          name: subcategory.name,
          parentCategory: parent._id,
          childCategories: subcategory.subcategories,
        });

        return category;
      }),
    );
    const subcategory = new this.subcategoryModel({
      name,
      parentCategory: parent._id,
      childCategories: createdSubcategories.map((subcat) => subcat._id),
    });
    return subcategory.save();
  }

  @Mutation(() => Boolean)
  async removeAllSubcategories(): Promise<boolean> {
    try {
      await this.subcategoryModel.deleteMany({});
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  remove(id: number) {
    return this.subcategoryModel.findByIdAndRemove(id);
  }
}
