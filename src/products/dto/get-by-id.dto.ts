import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType()
export class GetByIdDTO {
  @Field(() => ID)
  id: string;
}
