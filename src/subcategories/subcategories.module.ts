import { Module } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { SubcategoriesResolver } from './subcategories.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { SubcategorySchema } from './entities/subcategory.entity';
import { CategorySchema } from 'src/categories/entities/category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subcategory', schema: SubcategorySchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  providers: [SubcategoriesResolver, SubcategoriesService],
})
export class SubcategoriesModule {}
