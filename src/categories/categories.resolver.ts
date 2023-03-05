import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category, CategoryDocument } from './entities/category.entity';
import { CreateCategoriesInput } from './dto/create-categories.input';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import createProjection from '../database/projection';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  @Mutation(() => [Category], { name: 'createCategories' })
  createCategories(
    @Args('createCategoriesInput') createCategoriesInput: CreateCategoriesInput,
  ) {
    return this.categoriesService.createMany(createCategoriesInput);
  }

  @Mutation(() => Category)
  createCategory(@Args('category') category: CreateCategoryDTO) {
    return this.categoriesService.createCategory(category);
  }

  @Mutation(() => Boolean, { name: 'removeAllCategories' })
  removeAllCategories() {
    return this.categoriesService.removeAll();
  }

  @Query(() => Category)
  getCategoryByNameAndSubcategory(
    @Args('categoryName') categoryName: string,
    @Args('subcategoryName') subcategoryName: string,
  ) {
    return this.categoryModel.findOne({ name: categoryName }).populate({
      path: 'subcategories',
      populate: {
        path: 'childSubcategories',
        match: { name: subcategoryName },
      },
    });
  }

  @Query(() => Category)
  async getCategoryById(
    @Args('_id') _id: string,
    @Info() info: GraphQLResolveInfo,
  ) {
    // Generate a projection object based on the requested fields
    const { projection, populate } = createProjection(info);

    // Create a Mongoose query object for all categories
    const categoriesQuery = this.categoryModel.findById(_id, projection);

    if (populate.length) {
      categoriesQuery.populate(populate);
    }

    // Execute the query and return the results
    const categories = await categoriesQuery.lean().exec();

    return categories;
  }

  @Query(() => Category)
  getCategoryByName(@Args('categoryName') name: string) {
    return this.categoriesService.getCategoryByName(name);
  }

  @Query(() => [Category])
  async getCategories(@Info() info: GraphQLResolveInfo) {
    // Generate a projection object based on the requested fields
    const { projection, populate } = createProjection(info);

    // Create a Mongoose query object for all categories
    const categoriesQuery = this.categoryModel.find({}, projection);

    if (populate.length) {
      categoriesQuery.populate(populate);
    }

    // Execute the query and return the results
    const categories = await categoriesQuery.lean().exec();

    return categories;
  }
}
