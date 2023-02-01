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
import { MongooseModule } from '@nestjs/mongoose';
import { getEnvPath } from './common/helper/env.helper';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { FormfieldService } from './formfields/formfield.service';
import { FormFieldSchema } from './formfields/entity/formfield.entity';
import { FormFieldModule as FTASD } from './formfields/formfield.module';

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
    ]),
    FTASD,
  ],
  controllers: [AppController],
  providers: [...databaseProviders, AppService, FormfieldService],
})
export class AppModule {
  constructor(private readonly formFieldService: FormfieldService) {}

  async onModuleInit() {
    await this.formFieldService.addDefaultFields();
  }
}
