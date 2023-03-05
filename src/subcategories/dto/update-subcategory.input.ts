import { CreateSubcategoryInput } from './create-subcategory.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubcategoryInput extends PartialType(
  CreateSubcategoryInput,
) {
  @Field(() => String)
  _id: string;
}
