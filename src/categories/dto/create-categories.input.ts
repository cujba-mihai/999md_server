import { InputType, Field } from '@nestjs/graphql';
export type TCategoryName = string;
export type TCategories = TCategoryName[];

@InputType()
export class CreateCategoriesInput {
  @Field(() => [String])
  categoriesToAdd: TCategories;
}
