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

export class CreateCategoryDTO {
  name: string;
  subcategories?: Nullable<CreateSubcategoriesInput[]>;
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
  childSubcategories?: Nullable<CreateSubcategoriesInput[]>;
  name: string;
}

export class CreateSubcategoryInput {
  categoryId: string;
  name: string;
}

export class GetByIdDTO {
  _id: string;
}

export class GetOneSubcategoryDTO {
  _id: string;
}

export class GetSubcategoryByRelationDTO {
  category: string;
  subcategory: string;
}

export class ListProductsByCategoryDTO {
  categoryId: string;
  limit: number;
  offset: number;
}

export class ListProductsBySubcategoryDTO {
  limit: number;
  offset: number;
  subCategoryId: string;
}

export class SubcategoriesInputDTO {
  _id: string;
  childSubcategories?: Nullable<SubcategoriesInputDTO[]>;
  name?: Nullable<string>;
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
  _id: string;
  categoryId?: Nullable<string>;
  name?: Nullable<string>;
}

export class UserInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class Category {
  _id: string;
  name: string;
  subcategories?: Nullable<Subcategory[]>;
}

export class CreateSubcategoriesDTO {
  childSubcategories?: Nullable<CreateSubcategoriesDTO[]>;
  name: string;
}

export class FormField {
  _id: string;
  label: string;
  options: string[];
  type: string;
  validationSchema: string;
}

export class GetCategoriesDTO {
  _id: string;
  name: string;
  subcategories: SubcategoriesDTO[];
}

export class GetProductsDTO {
  _id: string;
  author: GetUserDTO;
  category: GetCategoriesDTO;
  currency: string;
  description: string;
  images: string[];
  name: string;
  price: number;
  productDetails: string;
  subcategory: SubcategoriesDTO;
  thumbnail: string;
}

export class GetUserDTO {
  _id: string;
  access_token?: Nullable<string>;
  email: string;
  firstName: string;
  lastName: string;
  products: GetProductsDTO[];
  refresh_token?: Nullable<string>;
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

  abstract createCategory(
    category: CreateCategoryDTO,
  ): Category | Promise<Category>;

  abstract createProduct(
    createProductInput: CreateProductInput,
  ): Product | Promise<Product>;

  abstract createRegionWithLocations(): Regions | Promise<Regions>;

  abstract createRegionsWithLocations(): Regions[] | Promise<Regions[]>;

  abstract createSubcategories(): Subcategory | Promise<Subcategory>;

  abstract createSubcategory(
    createSubcategoryInput: CreateSubcategoryInput,
  ): Subcategory | Promise<Subcategory>;

  abstract removeAllCategories(): boolean | Promise<boolean>;

  abstract removeAllFields(): boolean | Promise<boolean>;

  abstract removeAllProducts(): Product | Promise<Product>;

  abstract removeAllRegions(): boolean | Promise<boolean>;

  abstract removeAllSubcategories(): boolean | Promise<boolean>;

  abstract removeAllUsers(): boolean | Promise<boolean>;

  abstract removeProduct(_id: GetByIdDTO): Product | Promise<Product>;

  abstract removeSubcategory(
    id: GetOneSubcategoryDTO,
  ): Subcategory | Promise<Subcategory>;

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
  abstract findAllFields(): FormField[] | Promise<FormField[]>;

  abstract findByRelation(
    filter: GetSubcategoryByRelationDTO,
  ): SubcategoriesDTO | Promise<SubcategoriesDTO>;

  abstract findRegion(): Regions | Promise<Regions>;

  abstract findRegions(): Regions[] | Promise<Regions[]>;

  abstract getCategories(): Category[] | Promise<Category[]>;

  abstract getCategoryById(_id: string): Category | Promise<Category>;

  abstract getCategoryByName(
    categoryName: string,
  ): Category | Promise<Category>;

  abstract getCategoryByNameAndSubcategory(
    categoryName: string,
    subcategoryName: string,
  ): Category | Promise<Category>;

  abstract getProducts(): GetProductsDTO[] | Promise<GetProductsDTO[]>;

  abstract getProductsByCategory(
    listProductByCategoryInput: ListProductsByCategoryDTO,
  ): GetProductsDTO[] | Promise<GetProductsDTO[]>;

  abstract getProductsBySubcategory(
    listProductByCategoryInput: ListProductsBySubcategoryDTO,
  ): GetProductsDTO[] | Promise<GetProductsDTO[]>;

  abstract me(): User | Promise<User>;

  abstract product(_id: GetByIdDTO): GetProductsDTO | Promise<GetProductsDTO>;

  abstract products(): Product[] | Promise<Product[]>;

  abstract subcategories(): Subcategory[] | Promise<Subcategory[]>;

  abstract subcategory(
    subcategoryId: GetOneSubcategoryDTO,
  ): SubcategoriesDTO | Promise<SubcategoriesDTO>;

  abstract users(): UserType[] | Promise<UserType[]>;
}

export class Regions {
  _id: string;
  locations: Locations[];
  region: string;
}

export class SubcategoriesDTO {
  _id: string;
  childSubcategories?: Nullable<SubcategoriesDTO[]>;
  name?: Nullable<string>;
}

export class Subcategory {
  _id: string;
  childSubcategories?: Nullable<Subcategory[]>;
  name: string;
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
