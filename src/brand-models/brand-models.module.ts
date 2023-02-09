import { Module } from '@nestjs/common';
import { BrandModelsService } from './brand-models.service';
import { BrandModelsResolver } from './brand-models.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandModels, BrandModelsSchema } from './entity/brand-models.entity';
import {
  Subcategory,
  SubcategorySchema,
} from '../subcategories/entities/subcategory.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BrandModels.name, schema: BrandModelsSchema },
      { name: Subcategory.name, schema: SubcategorySchema },
    ]),
  ],
  providers: [BrandModelsResolver, BrandModelsService],
  exports: [BrandModelsResolver, BrandModelsService],
})
export class BrandModelsModule {}
