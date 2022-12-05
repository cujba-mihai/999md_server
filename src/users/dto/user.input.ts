import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;
}
