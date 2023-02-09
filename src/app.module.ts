import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from './users/users.module';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { getEnvPath } from './common/helper/env.helper';
import { AuthModule } from './auth/auth.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import {
  FormField,
  FormFieldDocument,
  FormFieldSchema,
} from './formfields/entity/formfield.entity';
import { FormFieldModule } from './formfields/formfield.module';
import { CategoriesModule } from './categories/categories.module';
import {
  Subcategory,
  SubcategoryDocument,
  SubcategorySchema,
} from './subcategories/entities/subcategory.entity';
import {
  Category,
  CategoryDocument,
  CategorySchema,
} from './categories/entities/category.entity';
import { LocationsModule } from './locations/locations.module';
import { RegionsModule } from './regions/regions.module';
import { Seeder } from './database/seeders';
import {
  Regions,
  RegionsDocument,
  RegionsSchema,
} from './regions/entity/regions.entity';
import { LocationsSchema } from './locations/entity/locations.entity';
import { FieldgroupsModule } from './fieldgroups/fieldgroups.module';
import {
  FieldGroups,
  FieldGroupsDocuments,
  FieldGroupsSchema,
} from './fieldgroups/entity/fieldgroups.entity';
import {
  BrandModels,
  BrandModelsDocument,
  BrandModelsSchema,
} from './brand-models/entity/brand-models.entity';
import { BrandModelsModule } from './brand-models/brand-models.module';
import { Model } from 'mongoose';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      debug: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DatabaseModule,
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@999clonedev.gs1u1cg.mongodb.net/?retryWrites=true&w=majority`,
    ),
    CategoriesModule,
    SubcategoriesModule,
    ProductsModule,
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
        name: Regions.name,
        schema: RegionsSchema,
      },
      {
        name: 'Locations',
        schema: LocationsSchema,
      },
      {
        name: 'FieldGroups',
        schema: FieldGroupsSchema,
      },
      {
        name: BrandModels.name,
        schema: BrandModelsSchema,
      },
    ]),
    FormFieldModule,
    LocationsModule,
    RegionsModule,
    FieldgroupsModule,
    BrandModelsModule,
  ],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
})
export class AppModule extends Seeder {
  constructor(
    @InjectModel(FormField.name)
    private readonly formFieldModel: Model<FormFieldDocument>,
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
    @InjectModel(Subcategory.name)
    private readonly subcategoriesModel: Model<SubcategoryDocument>,
    @InjectModel(FieldGroups.name)
    private readonly fieldGroupsModel: Model<FieldGroupsDocuments>,
    @InjectModel(Regions.name) private regionsModel: Model<RegionsDocument>,
    @InjectModel(BrandModels.name)
    private brandModelsModel: Model<BrandModelsDocument>,
  ) {
    super();
  }

  async onModuleInit() {
    await this.seed();
  }
}
