/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCategoriesInput {
  categoriesToAdd: string[];
}

export class CreateFieldFromStringDTO {
  label: string;
  stringSchema: string;
}

export class CreateProductInput {
  author: string;
  category: string;
  currency: string;
  description?: Nullable<string>;
  images: string[];
  name: string;
  price: number;
  productDetails: string;
  subcategory: string;
  thumbnail: string;
}

export class CreateSubcategoriesInput {
  name: string;
  parentCategory: string;
  subcategories?: Nullable<CreateSubcategoriesInput[]>;
}

export class CreateSubcategoryInput {
  categoryId: string;
  name: string;
}

export class UpdateProductInput {
  author?: Nullable<string>;
  category?: Nullable<string>;
  currency?: Nullable<string>;
  description?: Nullable<string>;
  id: string;
  images?: Nullable<string[]>;
  name?: Nullable<string>;
  price?: Nullable<number>;
  productDetails?: Nullable<string>;
  subcategory?: Nullable<string>;
  thumbnail?: Nullable<string>;
}

export class UpdateSubcategoryInput {
  categoryId?: Nullable<string>;
  id: number;
  name?: Nullable<string>;
}

export class UserInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class Category {
  id: string;
  name: string;
  subcategories?: Nullable<Subcategory[]>;
}

export class FormField {
  _id: string;
  label: string;
  options: string[];
  type: string;
  validationSchema: string;
}

export class Locations {
  _id: string;
  location: string;
  region: string;
  sector: string[];
}

export abstract class IMutation {
  abstract LogIn(email: string, password: string): User | Promise<User>;

  abstract Register(input: UserInput): UserType | Promise<UserType>;

  abstract createCategories(
    createCategoriesInput: CreateCategoriesInput,
  ): Category[] | Promise<Category[]>;

  abstract createFieldFromString(
    createField: CreateFieldFromStringDTO,
  ): FormField | Promise<FormField>;

  abstract createProduct(
    createProductInput: CreateProductInput,
  ): Product | Promise<Product>;

  abstract createRegionWithLocations(): Regions | Promise<Regions>;

  abstract createRegionsWithLocations(): Regions[] | Promise<Regions[]>;

  abstract createSubcategories(
    input: CreateSubcategoriesInput,
  ): Subcategory | Promise<Subcategory>;

  abstract createSubcategory(
    createSubcategoryInput: CreateSubcategoryInput,
  ): Subcategory | Promise<Subcategory>;

  abstract removeAllCategories(): boolean | Promise<boolean>;

  abstract removeAllFields(): boolean | Promise<boolean>;

  abstract removeAllProducts(): Product | Promise<Product>;

  abstract removeAllRegions(): boolean | Promise<boolean>;

  abstract removeAllSubcategories(): boolean | Promise<boolean>;

  abstract removeAllUsers(): boolean | Promise<boolean>;

  abstract removeProduct(id: number): Product | Promise<Product>;

  abstract removeSubcategory(id: number): Subcategory | Promise<Subcategory>;

  abstract updateProduct(
    updateProductInput: UpdateProductInput,
  ): Product | Promise<Product>;

  abstract updateSubcategory(
    updateSubcategoryInput: UpdateSubcategoryInput,
  ): Subcategory | Promise<Subcategory>;

  abstract userCreateProduct(
    product: CreateProductInput,
    userId: string,
  ): UserType | Promise<UserType>;
}

export class Product {
  _id: string;
  author: string;
  category: string;
  currency: string;
  description: string;
  images: string[];
  name: string;
  price: number;
  productDetails: string;
  subcategory: string;
  thumbnail: string;
}

export abstract class IQuery {
  abstract categories(): Category[] | Promise<Category[]>;

  abstract findAllFields(): FormField[] | Promise<FormField[]>;

  abstract findRegion(): Regions | Promise<Regions>;

  abstract findRegions(): Regions[] | Promise<Regions[]>;

  abstract me(): User | Promise<User>;

  abstract product(id: number): Product | Promise<Product>;

  abstract products(): Product[] | Promise<Product[]>;

  abstract subcategories(): Subcategory[] | Promise<Subcategory[]>;

  abstract subcategory(id: number): Subcategory | Promise<Subcategory>;

  abstract users(): UserType[] | Promise<UserType[]>;
}

export class Regions {
  _id: string;
  locations: Locations[];
  region: string;
}

export class Subcategory {
  _id: string;
  childCategories: Subcategory[];
  name?: Nullable<string>;
  parentCategory: string;
}

export class User {
  _id: string;
  access_token?: Nullable<string>;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  products: Product[];
  refresh_token?: Nullable<string>;
}

export class UserType {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  products: Product[];
}

type Nullable<T> = T | null;
