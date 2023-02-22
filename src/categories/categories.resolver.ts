import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoriesInput } from './dto/create-categories.input';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

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
  getCategoryByName(@Args('categoryName') name: string) {
    return this.categoriesService.getCategoryByName(name);
  }

  @Query(() => [Category])
  getCategories() {
    return this.categoriesService.findAll();
  }
}
