import { Module } from '@nestjs/common';
import { FieldgroupsService } from './fieldgroups.service';
import { FieldgroupsResolver } from './fieldgroups.resolver';

@Module({
  providers: [FieldgroupsResolver, FieldgroupsService],
})
export class FieldgroupsModule {}
