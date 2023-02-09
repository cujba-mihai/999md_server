import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetFieldGroupDTO {
  @Field(() => String, { nullable: false })
  id: string;
}
