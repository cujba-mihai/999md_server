import { Resolver } from '@nestjs/graphql';
import { FieldgroupsService } from './fieldgroups.service';

@Resolver()
export class FieldgroupsResolver {
  constructor(private readonly fieldgroupsService: FieldgroupsService) {}
}
