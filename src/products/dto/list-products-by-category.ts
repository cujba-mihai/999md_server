import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ListProductsByCategoryDTO {
  @Field(() => ID)
  categoryId: string;

  @Field(() => Number, { defaultValue: 0 })
  offset?: number;

  @Field(() => Number, { defaultValue: 50 })
  limit?: number;
}
