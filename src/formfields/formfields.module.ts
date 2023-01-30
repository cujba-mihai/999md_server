import { Module } from '@nestjs/common';
import { FormfieldsService } from './formfields.service';
import { FormfieldsResolver } from './formfields.resolver';

@Module({
  providers: [FormfieldsResolver, FormfieldsService],
  exports: [FormfieldsResolver, FormfieldsService],
})
export class FormfieldsModule {}
