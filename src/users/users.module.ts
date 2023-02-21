import { Module } from '@nestjs/common';
import { UserQueryService, UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';
import { Product, ProductSchema } from 'src/products/entities/product.entity';
import {
  Category,
  CategorySchema,
} from 'src/categories/entities/category.entity';
import {
  Subcategory,
  SubcategorySchema,
} from 'src/subcategories/entities/subcategory.entity';
import { NestjsQueryMongooseModule } from '@ptc-org/nestjs-query-mongoose';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { SubcategoriesModule } from '../subcategories/subcategories.module';
import { CategoriesModule } from '../categories/categories.module';
import { ProductsModule } from '../products/products.module';
import { GetUserDTO } from './dto/get-user.dto';

const nestjsQueryMongooseModule = NestjsQueryMongooseModule.forFeature([
  {
    document: User,
    name: User.name,
    schema: UserSchema,
  },
]);

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        nestjsQueryMongooseModule,
        SubcategoriesModule,
        CategoriesModule,
        ProductsModule,
      ],
      services: [UserQueryService],
      resolvers: [
        {
          DTOClass: GetUserDTO,
          EntityClass: User,
          ServiceClass: UserQueryService,
        },
      ],
    }),
    nestjsQueryMongooseModule,
    // MongooseModule.forFeature([
    //   { name: User.name, schema: UserSchema },
    //   { name: Product.name, schema: ProductSchema },
    //   { name: Category.name, schema: CategorySchema },
    //   { name: Subcategory.name, schema: SubcategorySchema },
    // ]),
  ],
  providers: [UsersResolver, UsersService, UserQueryService],
  exports: [
    UsersResolver,
    UsersService,
    UserQueryService,
    nestjsQueryMongooseModule,
  ],
})
export class UsersModule {}
