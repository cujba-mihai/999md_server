import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFieldFromStringDTO {
  @Field(() => String)
  stringSchema: string;

  @Field(() => String)
  label: string;
}
