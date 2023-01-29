import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubcategoriesService } from './subcategories.service';
import { Subcategory } from './entities/subcategory.entity';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';
import { CreateSubcategoriesInput } from './dto/create-subcategories.input';

@Resolver(() => Subcategory)
export class SubcategoriesResolver {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Mutation(() => Subcategory)
  createSubcategory(
    @Args('createSubcategoryInput')
    createSubcategoryInput: CreateSubcategoryInput,
  ) {
    return this.subcategoriesService.create(createSubcategoryInput);
  }

  @Query(() => [Subcategory], { name: 'subcategories' })
  findAll() {
    return this.subcategoriesService.findAll();
  }

  @Query(() => Subcategory, { name: 'subcategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subcategoriesService.findOne(id);
  }

  @Mutation(() => Subcategory)
  createSubcategories(
    @Args('input') input: CreateSubcategoriesInput,
  ): Promise<Subcategory> {
    const { name, parentCategory, subcategories } = input;

    return this.subcategoriesService.createSubcategories(
      parentCategory,
      subcategories,
      name,
    );
  }

  @Mutation(() => Boolean)
  async removeAllSubcategories(): Promise<boolean> {
    return await this.subcategoriesService.removeAllSubcategories();
  }

  @Mutation(() => Subcategory)
  updateSubcategory(
    @Args('updateSubcategoryInput')
    updateSubcategoryInput: UpdateSubcategoryInput,
  ) {
    return this.subcategoriesService.update(
      updateSubcategoryInput.id,
      updateSubcategoryInput,
    );
  }

  @Mutation(() => Subcategory)
  removeSubcategory(@Args('id', { type: () => Int }) id: number) {
    return this.subcategoriesService.remove(id);
  }
}
