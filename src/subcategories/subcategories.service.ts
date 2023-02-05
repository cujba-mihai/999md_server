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
import { GetSubcategoryByRelationDTO } from './dto/get-by-relation.dto';
import { GetOneSubcategoryDTO } from './dto/get-one-subcategory.dto';
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
        or: [
          {
            childCategories: {
              $size: {
                $gt: 0,
              },
            },
          },
          {
            childCategories: {
              $size: {
                $ne: null,
              },
            },
          },
        ],
      })
      .populate([
        {
          path: 'childCategories',
          populate: {
            path: 'childCategories',
          },
        },
      ]);
  }

  /**
    Finds a subcategory by its relation to a category.
    @param {GetSubcategoryByRelationDTO} category - The name or ID of the category to search.
    @param {string} subcategory - The name or id of the subcategory to search.
    @returns {Promise<Subcategory>} A Promise that resolves to the matching subcategory.
  */
  async findByRelation({ category, subcategory }: GetSubcategoryByRelationDTO) {
    const categories = await this.categoryModel
      .find({
        $or: [
          {
            name: category,
          },
          {
            id: category,
          },
        ],
      })
      .populate({
        path: 'subcategories',
        populate: {
          path: 'childSubcategories',
        },
      })
      .exec();

    const allSubcategories = categories
      .map((category) => {
        return category.subcategories;
      })
      .flat();

    const allChildSubcategories = allSubcategories
      .map((sub) => {
        return sub.childSubcategories;
      })
      .flat();

    const subcategoryREGEX = new RegExp(subcategory, 'gmi');

    const matchingSubcategory = allChildSubcategories.find(
      (childCat) =>
        subcategoryREGEX.test(childCat.name) || childCat.id === subcategory,
    );

    const subcategoryFound = await this.subcategoryModel
      .findById(matchingSubcategory.id)
      .exec();

    return subcategoryFound;
  }

  async findOne({ id }: GetOneSubcategoryDTO) {
    return await this.subcategoryModel
      .findById(id)
      .populate([
        {
          path: 'childCategories',
          strictPopulate: false,
          populate: {
            path: 'childCategories',
            strictPopulate: false,
          },
        },
      ])
      .exec();
  }

  update(id: number, updateSubcategoryInput: UpdateSubcategoryInput) {
    return this.subcategoryModel.findByIdAndUpdate(id, updateSubcategoryInput);
  }

  async createSubcategories(subcategories: CreateSubcategoriesInput[]) {
    const result = await Promise.all(
      subcategories.map(async (subcategory) => {
        return await this.subcategoryModel.create({
          name: subcategory.name,
          childSubcategories: await this.subcategoryModel.create(
            subcategory.childSubcategories,
          ),
        });
      }),
    );
    return result;
  }

  async DEPRECATED_createSubcategories(
    childSubcategories: CreateSubcategoriesInput[],
    name: string,
  ) {
    const createdSubcategories = await Promise.all(
      childSubcategories.map(async (subcategory) => {
        const category = await this.subcategoryModel.create({
          name: subcategory.name,
          childCategories: subcategory.childSubcategories,
        });

        return category;
      }),
    );
    const subcategory = new this.subcategoryModel({
      name,
      childCategories: createdSubcategories.map((subcat) => subcat._id),
    });
    await subcategory.save();

    return subcategory;
  }

  @Mutation(() => Boolean)
  async removeAllSubcategories(): Promise<boolean> {
    try {
      await this.subcategoryModel.deleteMany({}).exec();

      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  remove({ id }: GetOneSubcategoryDTO) {
    return this.subcategoryModel.findByIdAndRemove(id);
  }
}
