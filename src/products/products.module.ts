import { Module } from '@nestjs/common';
import { ProductQueryService, ProductsService } from './products.service';
import { Product, ProductSchema } from './entities/product.entity';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { GetProductDTO } from './dto/get-product.dto';
import { CreateProductInput } from './dto/create-product.input';
import { SubcategoriesService } from '../subcategories/subcategories.service';
import { SubcategoriesModule } from '../subcategories/subcategories.module';
import { CategoriesModule } from '../categories/categories.module';
import { CategoriesService } from '../categories/categories.service';
import { UsersModule } from '../users/users.module';
import { UserQueryService } from '../users/users.service';

const nestjsQueryMongooseModule = NestjsQueryMongooseModule.forFeature([
  {
    document: Product,
    name: Product.name,
    schema: ProductSchema,
  },
]);

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        nestjsQueryMongooseModule,
        SubcategoriesModule,
        CategoriesModule,
      ],
      services: [
        ProductQueryService,
        SubcategoriesService,
        ProductsService,
        CategoriesService,
      ],
      resolvers: [
        {
          DTOClass: GetProductDTO,
          EntityClass: Product,
          CreateDTOClass: CreateProductInput,
          ServiceClass: ProductsService,
        },
      ],
      
    }),
    nestjsQueryMongooseModule,
  ],
  exports: [nestjsQueryMongooseModule],
})
export class ProductsModule {}
