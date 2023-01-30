import { CreateProductInput } from './create-product.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => String)
  id: string;
}
