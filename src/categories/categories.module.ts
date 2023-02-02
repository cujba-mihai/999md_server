import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './entities/category.entity';
import {
  Subcategory,
  SubcategorySchema,
} from 'src/subcategories/entities/subcategory.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Subcategory.name, schema: SubcategorySchema },
    ]),
  ],
  providers: [CategoriesResolver, CategoriesService],
  exports: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
