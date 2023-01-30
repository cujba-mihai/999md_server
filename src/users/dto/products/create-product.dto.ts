import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserProduct {
  @Field(() => ID)
  readonly id: string;

  @Field()
  product: object;
}
