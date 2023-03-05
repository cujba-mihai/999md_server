/* eslint-disable @typescript-eslint/no-unused-vars */
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

console.log(process.env.DOTENV_CONFIG_PATH);
const env = dotenv.config({ path: process.env.DOTENV_CONFIG_PATH, debug: true });
dotenvExpand.expand(env);

import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database/database.providers';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from './users/users.module';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { FormfieldService } from './formfields/formfield.service';
import {
  FormField,
  FormFieldSchema,
} from './formfields/entity/formfield.entity';
import { FormFieldModule } from './formfields/formfield.module';
import { CategoriesModule } from './categories/categories.module';
import {
  Subcategory,
  SubcategorySchema,
} from './subcategories/entities/subcategory.entity';
import {
  Category,
  CategorySchema,
} from './categories/entities/category.entity';
import { CategoriesService } from './categories/categories.service';
import { SubcategoriesService } from './subcategories/subcategories.service';
import { LocationsModule } from './locations/locations.module';
import { RegionsModule } from './regions/regions.module';
import { Seeder } from './database/seeders';
import { RegionsService } from './regions/regions.service';
import { Regions, RegionsSchema } from './regions/entity/regions.entity';
import { LocationsSchema } from './locations/entity/locations.entity';
import { FieldgroupsModule } from './fieldgroups/fieldgroups.module';
import { Model } from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.DOTENV_CONFIG_PATH,
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`),
    MongooseModule.forFeature([
      {
        name: 'FormField',
        schema: FormFieldSchema,
      },
      {
        name: 'Category',
        schema: CategorySchema,
      },
      {
        name: 'Subcategory',
        schema: SubcategorySchema,
      },
      {
        name: 'Regions',
        schema: RegionsSchema,
      },
      {
        name: 'Locations',
        schema: LocationsSchema,
      },
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      introspection: true,
      stopOnTerminationSignals: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      cache: 'bounded',
      debug: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    SubcategoriesModule,
    ProductsModule,
    FormFieldModule,
    LocationsModule,
    RegionsModule,
    FieldgroupsModule,
  ],
  controllers: [AppController],
  providers: [
    ...databaseProviders,
    AppService,
    FormfieldService,
    CategoriesService,
    SubcategoriesService,
    RegionsService,
  ],
})
export class AppModule extends Seeder {
  constructor(
    private readonly formFieldService: FormfieldService,
    private readonly categoriesService: CategoriesService,
    private readonly subcategoriesService: SubcategoriesService,
    private readonly regionsService: RegionsService,
    @InjectModel(Regions.name) regionsModel: Model<Regions>,
    @InjectModel(Subcategory.name) SubcategoryModel: Model<Subcategory>,
    @InjectModel(Category.name) CategoryModel: Model<Category>,
    @InjectModel(FormField.name) FormFieldModel: Model<FormField>,
  ) {
    super();
  }

  async onModuleInit() {
    await this.seed();
  }
}
