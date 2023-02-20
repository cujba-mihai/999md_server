import { Module } from '@nestjs/common';
import { Subcategory, SubcategorySchema } from './entities/subcategory.entity';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { GetSubcategories } from './dto/get-subcategories.dto';
import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategoriesInput } from './dto/create-subcategories.input';
import { SubcategoriesResolver } from './subcategories.resolver';

const nestjsQueryMongooseModule = NestjsQueryMongooseModule.forFeature([
  {
    document: Subcategory,
    name: Subcategory.name,
    schema: SubcategorySchema,
  },
]);

@Module({
  providers: [SubcategoriesResolver],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [nestjsQueryMongooseModule],
      services: [SubcategoriesService],
      resolvers: [
        {
          DTOClass: GetSubcategories,
          CreateDTOClass: CreateSubcategoriesInput,
          EntityClass: Subcategory,
        },
      ],
    }),
    nestjsQueryMongooseModule,
  ],

  exports: [nestjsQueryMongooseModule],
})
export class SubcategoriesModule {}
