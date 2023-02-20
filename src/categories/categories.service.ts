/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category } from './entities/category.entity';
import { InjectQueryService, QueryService } from '@ptc-org/nestjs-query-core';
import { Subcategory } from '../subcategories/entities/subcategory.entity';
import { MutationLoggerService } from '../utils/mutation-logger.service';
import { Args, Mutation } from '@nestjs/graphql';
import { CreateCategoryInput } from './dto/create-category.dto';
import { SubcategoriesService } from '../subcategories/subcategories.service';
import { CreateCategoriesInput } from './dto/create-categories.dto';

export class CategoriesService extends MutationLoggerService<Category> {
  constructor(
    private readonly subcategoriesService: SubcategoriesService,
    @InjectQueryService(Category) queryService: QueryService<Category>,
    @InjectQueryService(Subcategory)
    subcategoryQueryService: QueryService<Subcategory>,
  ) {
    super(CategoriesService.name, queryService);
  }

  @Mutation(() => [Category])
  async createCategoriesWithSubcategories(
    @Args('categories') { categories }: CreateCategoriesInput,
  ) {
    return await Promise.all(
      categories.map(async (category) => {
        return await this.createCategoryWithSubcategories(category);
      }),
    );
  }

  @Mutation(() => Category)
  async createCategoryWithSubcategories(
    @Args('category') category: CreateCategoryInput,
  ) {
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

    return createdCategory;
  }
}
