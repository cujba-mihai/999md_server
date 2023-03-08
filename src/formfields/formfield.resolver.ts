import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { FormField } from './entity/formfield.entity';
import { FormfieldService } from './formfield.service';

@Resolver(() => FormField)
export class FormfieldsResolver {
  constructor(private readonly formfieldService: FormfieldService) {}

  @Query(() => [FormField])
  findAllFields() {
    return this.formfieldService.findAll();
  }

  @Mutation(() => Boolean)
  removeAllFields() {
    return this.formfieldService.removeAllFields();
  }
}
