import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Subcategory } from '../entities/subcategory.entity';
import { GetSubcategories } from './get-subcategories.dto';

@InputType('CreateSubcategoriesInput')
@ObjectType('CreateSubcategoriesDTO')
export class CreateSubcategoriesInput {
  @Field()
  name: string;

  @Field(() => [CreateSubcategoriesInput], { nullable: true, defaultValue: [] })
  childSubcategories: CreateSubcategoriesInput[];
}
