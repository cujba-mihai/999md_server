import { Field, ObjectType } from '@nestjs/graphql';
import { GetSubcategories } from '~server/src/subcategories/dto/get-subcategories.dto';

@ObjectType('CategoriesDTO')
export class GetCategoriesDTO {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [GetSubcategories])
  subcategories: GetSubcategories[];
}
