import { Module } from '@nestjs/common';
import { FieldgroupsService } from './fieldgroups.service';
import { FieldgroupsResolver } from './fieldgroups.resolver';
import { FieldGroups, FieldGroupsSchema } from './entity/fieldgroups.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { FormField } from '../graphql';
import { FormFieldSchema } from '../formfields/entity/formfield.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FieldGroups.name, schema: FieldGroupsSchema },
      { name: FormField.name, schema: FormFieldSchema },
    ]),
  ],
  providers: [FieldgroupsResolver, FieldgroupsService],
  exports: [FieldgroupsResolver, FieldgroupsService],
})
export class FieldgroupsModule {}
