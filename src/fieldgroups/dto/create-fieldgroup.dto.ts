import { Field, InputType } from '@nestjs/graphql';
import { FieldGroups } from '../entity/fieldgroups.entity';

@InputType()
export class CreateFieldGropDTO {
  @Field()
  fieldGroup: FieldGroups;
}
