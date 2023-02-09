import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFieldByLabelDTO {
  @Field(() => String, { nullable: true })
  label: string;
}
