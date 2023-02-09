import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { GetFieldGroupDTO } from './dto/get-fieldgroup.dto';
import { FieldGroups } from './entity/fieldgroups.entity';
import { FieldgroupsService } from './fieldgroups.service';

@Resolver()
export class FieldgroupsResolver {
  constructor(private readonly fieldgroupsService: FieldgroupsService) {}

  @Query(() => FieldGroups)
  getFieldGroup(@Args('id') id: GetFieldGroupDTO) {
    return this.fieldgroupsService.getFieldGroup(id);
  }

  @Query(() => [FieldGroups])
  getAllFieldGroups(): Promise<FieldGroups[]> {
    return this.fieldgroupsService.getAllFieldGroups();
  }

  @Mutation(() => Boolean)
  removeAllFieldGroups() {
    return this.fieldgroupsService.removeAllFieldGroups();
  }
}
