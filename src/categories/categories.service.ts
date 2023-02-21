/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category, CategoryDocument } from './entities/category.entity';
import { InjectQueryService, QueryService } from '@ptc-org/nestjs-query-core';
import { Subcategory } from '../subcategories/entities/subcategory.entity';
import { MutationLoggerService } from '../utils/mutation-logger.service';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { CreateCategoryInput } from './dto/create-category.dto';
import { SubcategoriesService } from '../subcategories/subcategories.service';
import { CreateCategoriesInput } from './dto/create-categories.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoriesWithSubcategoriesOutput } from './dto/create-categories-output';

export class CategoriesService extends MutationLoggerService<Category> {
  constructor(
    private readonly subcategoriesService: SubcategoriesService,
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
    @InjectQueryService(Category) queryService: QueryService<Category>,
    @InjectQueryService(Subcategory)
    subcategoryQueryService: QueryService<Subcategory>,
  ) {
    super(CategoriesService.name, queryService);
  }

  @Query(() => [Category])
  getCategories() {
    return this.categoryModel.find().populate({
      path: 'subcategories',
      populate: {
        path: 'childSubcategories',
      },
    });
  }

  @Query(() => Category)
  getCategory(@Args('categoryName') categoryName: string) {
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

  @Mutation(() => [Category])
  async createCategoriesWithSubcategories(
    @Args('categories') { categories }: CreateCategoriesInput,
  ): Promise<CreateCategoriesWithSubcategoriesOutput[]> {
    return await Promise.all(
      categories.map(async (category) => {
        const createdCategory = await this.createCategoryWithSubcategories(
          category,
        );
        return createdCategory;
      }),
    );
  }

  @Mutation(() => Category)
  async createCategoryWithSubcategories(
    @Args('category') category: CreateCategoryInput,
  ): Promise<CreateCategoriesWithSubcategoriesOutput> {
    const subcategoriesInput = Array.isArray(category?.subcategories)
      ? category.subcategories
      : [];

    const subcategories = await this.subcategoriesService.createSubcategories(
      subcategoriesInput,
    );

    const createdCategory = await super.createOne({
      name: category.name,
      subcategories,
    });

    console.log('CREATED CATEGORY: ', createdCategory);
    return createdCategory;
  }
}
