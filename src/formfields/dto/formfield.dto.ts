import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FormFieldsType } from '../entity/formfields.entity';

@ObjectType()
export class FormFieldDTO {
  @Field(() => ID)
  readonly id: string;

  @Field()
  name: string;

  @Field()
  element: string;

  @Field()
  type: FormFieldsType;

  @Field(() => [String])
  values?: string[];
}
