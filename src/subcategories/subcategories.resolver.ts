import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SubcategoriesService } from './subcategories.service';
import { Subcategory } from './entities/subcategory.entity';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';
import { CreateSubcategoriesInput } from './dto/create-subcategories.input';
import { Body } from '@nestjs/common';
import { GetOneSubcategoryDTO } from './dto/get-one-subcategory.dto';
import { GetSubcategoryByRelationDTO } from './dto/get-by-relation.dto';
import { GetSubcategories } from './dto/get-subcategories.dto';

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

  @Query(() => GetSubcategories)
  findByRelation(@Args('filter') filter: GetSubcategoryByRelationDTO) {
    return this.subcategoriesService.findByRelation(filter);
  }

  @Query(() => [Subcategory], { name: 'subcategories' })
  findAll() {
    return this.subcategoriesService.findAll();
  }

  @Query(() => GetSubcategories, { name: 'subcategory' })
  findOne(@Args('subcategoryId') id: GetOneSubcategoryDTO) {
    return this.subcategoriesService.findOne(id);
  }

  @Mutation(() => Subcategory)
  createSubcategories(
    @Body('input') input: CreateSubcategoriesInput[],
  ): Promise<Subcategory[]> {
    return this.subcategoriesService.createSubcategories(input);
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
  removeSubcategory(@Args('id') id: GetOneSubcategoryDTO) {
    return this.subcategoriesService.remove(id);
  }
}
