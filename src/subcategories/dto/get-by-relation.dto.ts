import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType()
export class GetSubcategoryByRelationDTO {
  @Field()
  category: string;

  @Field()
  subcategory: string;
}
