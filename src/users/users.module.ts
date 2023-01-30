import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
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

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Subcategory.name, schema: SubcategorySchema },
    ]),
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersResolver, UsersService],
})
export class UsersModule {}
