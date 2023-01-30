import { Query, Resolver } from '@nestjs/graphql';
import { FormFields } from './entity/formfields.entity';
import { FormfieldsService } from './formfields.service';

@Resolver()
export class FormfieldsResolver {
  constructor(private readonly formfieldsService: FormfieldsService) {}

  @Query(() => [FormFields], { name: 'formFields' })
  findAllFields() {
    return this.formfieldsService.findAll();
  }
}
