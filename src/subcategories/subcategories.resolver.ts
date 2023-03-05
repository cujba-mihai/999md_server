import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { SubcategoriesService } from './subcategories.service';
import { Subcategory } from './entities/subcategory.entity';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';
import { CreateSubcategoriesInput } from './dto/create-subcategories.input';
import { Body } from '@nestjs/common';
import { GetOneSubcategoryDTO } from './dto/get-one-subcategory.dto';
import { GetSubcategoryByRelationDTO } from './dto/get-by-relation.dto';
import { GetSubcategories } from './dto/get-subcategories.dto';
import { GraphQLResolveInfo } from 'graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import createProjection from '../database/projection';

@Resolver(() => Subcategory)
export class SubcategoriesResolver {
  constructor(
    private readonly subcategoriesService: SubcategoriesService,
    @InjectModel(Subcategory.name) private subcategoryModel: Model<Subcategory>,
  ) {}

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
  async findAll(@Info() info: GraphQLResolveInfo) {
    // Generate a projection object based on the requested fields
    const { projection, populate } = createProjection(info);
    const subcategoriesQuery = this.subcategoryModel.find({}, projection);

    if (populate.length) {
      subcategoriesQuery.populate(populate);
    }

    const subcategories = await subcategoriesQuery.lean().exec();

    return subcategories;
  }

  @Query(() => GetSubcategories, { name: 'subcategory' })
  findOne(@Args('subcategoryId') _id: GetOneSubcategoryDTO) {
    return this.subcategoriesService.findOne(_id);
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
      updateSubcategoryInput._id,
      updateSubcategoryInput,
    );
  }

  @Mutation(() => Subcategory)
  removeSubcategory(@Args('id') _id: GetOneSubcategoryDTO) {
    return this.subcategoriesService.remove(_id);
  }
}
