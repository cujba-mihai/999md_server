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
  id: number;
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
}

export class Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export abstract class IMutation {
  abstract createCategories(
    createCategoriesInput: CreateCategoriesInput,
  ): Category[] | Promise<Category[]>;

  abstract createProduct(
    createProductInput: CreateProductInput,
  ): Product | Promise<Product>;

  abstract createSubcategories(
    input: CreateSubcategoriesInput,
  ): Subcategory | Promise<Subcategory>;

  abstract createSubcategory(
    createSubcategoryInput: CreateSubcategoryInput,
  ): Subcategory | Promise<Subcategory>;

  abstract createUser(input: UserInput): UserType | Promise<UserType>;

  abstract removeAllProducts(): Product | Promise<Product>;

  abstract removeAllSubcategories(): boolean | Promise<boolean>;

  abstract removeProduct(id: number): Product | Promise<Product>;

  abstract removeSubcategory(id: number): Subcategory | Promise<Subcategory>;

  abstract updateProduct(
    updateProductInput: UpdateProductInput,
  ): Product | Promise<Product>;

  abstract updateSubcategory(
    updateSubcategoryInput: UpdateSubcategoryInput,
  ): Subcategory | Promise<Subcategory>;
}

export class Product {
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

  abstract product(id: number): Product | Promise<Product>;

  abstract products(): Product[] | Promise<Product[]>;

  abstract subcategories(): Subcategory[] | Promise<Subcategory[]>;

  abstract subcategory(id: number): Subcategory | Promise<Subcategory>;

  abstract users(): UserType[] | Promise<UserType[]>;
}

export class Subcategory {
  _id: string;
  childCategories: Subcategory[];
  name: string;
  parentCategory: string;
}

export class UserType {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
}

type Nullable<T> = T | null;
