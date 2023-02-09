import { Field, InputType } from '@nestjs/graphql';
import { FormFieldType } from '~server/types';

@InputType()
export class CreateFieldFromStringDTO {
  @Field(() => String)
  validationString: string;

  @Field(() => String)
  label: string;

  @Field(() => String)
  type: FormFieldType;

  @Field(() => [String])
  options?: FormFieldType;
}
