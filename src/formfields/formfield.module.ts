import { Module } from '@nestjs/common';
import { FormfieldService } from './formfield.service';
import { FormfieldsResolver } from './formfield.resolver';
import { FormField, FormFieldSchema } from './entity/formfield.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FormField.name, schema: FormFieldSchema },
    ]),
  ],
  providers: [FormfieldsResolver, FormfieldService],
  exports: [FormfieldsResolver, FormfieldService],
})
export class FormFieldModule {}
