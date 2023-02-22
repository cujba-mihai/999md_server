import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType('CreateSubcategoriesInput')
@ObjectType('CreateSubcategoriesDTO')
export class CreateSubcategoriesInput {
  @Field()
  name: string;

  @Field(() => [CreateSubcategoriesInput], { nullable: true, defaultValue: [] })
  childSubcategories: CreateSubcategoriesInput[];
}
