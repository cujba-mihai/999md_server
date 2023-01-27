import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { nullable: false })
  author: string;

  @Field(() => String, { nullable: false })
  category: string;

  @Field(() => String, { nullable: false })
  subcategory: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => Int, { nullable: false })
  price: number;

  @Field(() => String, { nullable: false })
  currency: string;

  @Field(() => [String], { nullable: false })
  images: string[];

  @Field(() => String, { nullable: false })
  thumbnail: string;

  // Should store specification categories (e.g. general, other) as objects
  // general: { type: 'sell' }
  @Field({ nullable: false })
  productDetails: string;
}
