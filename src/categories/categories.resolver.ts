import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoriesInput } from './dto/create-categories.input';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => [Category], { name: 'createCategories' })
  createCategories(
    @Args('createCategoriesInput') createCategoriesInput: CreateCategoriesInput,
  ) {
    return this.categoriesService.createMany(createCategoriesInput);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoriesService.findAll();
  }
}
