import { Module } from '@nestjs/common';
import { Category, CategorySchema } from './entities/category.entity';

import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';

import { GetCategoriesDTO } from './dto/get-categories.input';
import { SubcategoriesModule } from '../subcategories/subcategories.module';
import { CategoriesService } from './categories.service';
import { CreateCategoryInput } from './dto/create-category.dto';
import { SubcategoriesService } from '../subcategories/subcategories.service';

const nestjsQueryMongooseModule = NestjsQueryMongooseModule.forFeature([
  {
    document: Category,
    name: Category.name,
    schema: CategorySchema,
  },
]);

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [nestjsQueryMongooseModule, SubcategoriesModule],
      services: [CategoriesService, SubcategoriesService],
      resolvers: [
        {
          DTOClass: GetCategoriesDTO,
          EntityClass: Category,
          CreateDTOClass: CreateCategoryInput,
          ServiceClass: CategoriesService,
        },
      ],
    }),
    nestjsQueryMongooseModule,
  ],
  exports: [nestjsQueryMongooseModule],
})
export class CategoriesModule {}
