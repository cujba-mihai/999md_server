import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType('SubcategoriesDTO')
@InputType('SubcategoriesInputDTO')
export class GetSubcategories {
  @Field(() => String)
  _id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => [GetSubcategories], { nullable: true, defaultValue: [] })
  childSubcategories: GetSubcategories[];
}
