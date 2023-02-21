import { Field, ObjectType } from '@nestjs/graphql';
import { GetSubcategories } from '~server/src/subcategories/dto/get-subcategories.dto';
import { Category } from '../entities/category.entity';

@ObjectType()
export class CreateCategoriesWithSubcategoriesOutput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [GetSubcategories], { nullable: true })
  subcategories?: Category['subcategories'];
}
