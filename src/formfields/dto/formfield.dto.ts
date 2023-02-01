import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FormFieldType } from '../entity/formfield.entity';

@ObjectType()
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
