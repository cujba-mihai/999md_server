import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType()
export class GetByIdDTO {
  @Field(() => String)
  _id: string;
}
