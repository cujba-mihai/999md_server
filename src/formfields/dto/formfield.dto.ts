import { Field, ID, InputType } from '@nestjs/graphql';
import { FormFieldType } from '~server/types';

@InputType()
export class FormFieldDTO {
  @Field(() => ID)
  readonly id: string;

  @Field()
  name: string;

  @Field()
  element: string;

  @Field()
  type: FormFieldType;

  @Field(() => [String])
  values?: string[];
}
