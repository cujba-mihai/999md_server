
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CategoryDTOSortFields {
    id = "id",
    name = "name"
}

export enum GetProductDTOSortFields {
    name = "name",
    price = "price"
}

export enum LocationSortFields {
    id = "id",
    location = "location"
}

export enum RegionSortFields {
    id = "id",
    region = "region"
}

export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export enum SortNulls {
    NULLS_FIRST = "NULLS_FIRST",
    NULLS_LAST = "NULLS_LAST"
}

export enum SubcategoriesDTOSortFields {
    id = "id",
    name = "name"
}

export enum UserDTOSortFields {
    email = "email",
    firstName = "firstName",
    lastName = "lastName"
}

export class AddCategoriesToGetProductDTOInput {
    id: string;
    relationIds: string[];
}

export class AddLocationsToRegionInput {
    id: string;
    relationIds: string[];
}

export class AddProductsToUserDTOInput {
    id: string;
    relationIds: string[];
}

export class AddSubcategoriesToCategoryDTOInput {
    id: string;
    relationIds: string[];
}

export class AddSubcategoriesToGetProductDTOInput {
    id: string;
    relationIds: string[];
}

export class AddSubcategoriesToSubcategoriesDTOInput {
    id: string;
    relationIds: string[];
}

export class CategoryDTODeleteFilter {
    and?: Nullable<CategoryDTODeleteFilter[]>;
    id?: Nullable<StringFieldComparison>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<CategoryDTODeleteFilter[]>;
}

export class CategoryDTOFilter {
    and?: Nullable<CategoryDTOFilter[]>;
    id?: Nullable<StringFieldComparison>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<CategoryDTOFilter[]>;
}

export class CategoryDTOSort {
    direction: SortDirection;
    field: CategoryDTOSortFields;
    nulls?: Nullable<SortNulls>;
}

export class CategoryDTOUpdateFilter {
    and?: Nullable<CategoryDTOUpdateFilter[]>;
    id?: Nullable<StringFieldComparison>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<CategoryDTOUpdateFilter[]>;
}

export class CreateCategoriesInput {
    categories: CreateCategoryInput[];
}

export class CreateCategoryInput {
    name: string;
    subcategories?: Nullable<CreateSubcategoriesInput[]>;
}

export class CreateFieldFromStringDTO {
    label: string;
    stringSchema: string;
}

export class CreateLocationInputDTO {
    location: string;
    region: string;
    sector: string[];
}

export class CreateManyCategoryDTOSInput {
    categoryDTOS: CreateCategoryInput[];
}

export class CreateManyGetProductDTOSInput {
    getProductDTOS: CreateProductInput[];
}

export class CreateManyLocationsInput {
    locations: CreateLocationInputDTO[];
}

export class CreateManyRegionsInput {
    regions: CreateRegion[];
}

export class CreateManySubcategoriesDTOSInput {
    subcategoriesDTOS: CreateSubcategoriesInput[];
}

export class CreateManyUserDTOSInput {
    userDTOS: CreateUserDTO[];
}

export class CreateOneCategoryDTOInput {
    categoryDTO: CreateCategoryInput;
}

export class CreateOneGetProductDTOInput {
    getProductDTO: CreateProductInput;
}

export class CreateOneLocationInput {
    location: CreateLocationInputDTO;
}

export class CreateOneRegionInput {
    region: CreateRegion;
}

export class CreateOneSubcategoriesDTOInput {
    subcategoriesDTO: CreateSubcategoriesInput;
}

export class CreateOneUserDTOInput {
    userDTO: CreateUserDTO;
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

export class CreateRegion {
    id: string;
    region?: Nullable<string>;
}

export class CreateSubcategoriesInput {
    childSubcategories?: Nullable<CreateSubcategoriesInput[]>;
    name: string;
}

export class CreateUserDTO {
    _id: string;
    access_token?: Nullable<string>;
    email: string;
    firstName: string;
    lastName: string;
    refresh_token?: Nullable<string>;
}

export class CursorPaging {
    after?: Nullable<ConnectionCursor>;
    before?: Nullable<ConnectionCursor>;
    first?: Nullable<number>;
    last?: Nullable<number>;
}

export class DeleteManyCategoryDTOSInput {
    filter: CategoryDTODeleteFilter;
}

export class DeleteManyGetProductDTOSInput {
    filter: GetProductDTODeleteFilter;
}

export class DeleteManyLocationsInput {
    filter: LocationDeleteFilter;
}

export class DeleteManyRegionsInput {
    filter: RegionDeleteFilter;
}

export class DeleteManySubcategoriesDTOSInput {
    filter: SubcategoriesDTODeleteFilter;
}

export class DeleteManyUserDTOSInput {
    filter: UserDTODeleteFilter;
}

export class DeleteOneCategoryDTOInput {
    id: string;
}

export class DeleteOneGetProductDTOInput {
    id: string;
}

export class DeleteOneLocationInput {
    id: string;
}

export class DeleteOneRegionInput {
    id: string;
}

export class DeleteOneSubcategoriesDTOInput {
    id: string;
}

export class DeleteOneUserDTOInput {
    id: string;
}

export class GetProductDTODeleteFilter {
    and?: Nullable<GetProductDTODeleteFilter[]>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<GetProductDTODeleteFilter[]>;
    price?: Nullable<NumberFieldComparison>;
}

export class GetProductDTOFilter {
    and?: Nullable<GetProductDTOFilter[]>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<GetProductDTOFilter[]>;
    price?: Nullable<NumberFieldComparison>;
}

export class GetProductDTOSort {
    direction: SortDirection;
    field: GetProductDTOSortFields;
    nulls?: Nullable<SortNulls>;
}

export class GetProductDTOUpdateFilter {
    and?: Nullable<GetProductDTOUpdateFilter[]>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<GetProductDTOUpdateFilter[]>;
    price?: Nullable<NumberFieldComparison>;
}

export class IDFilterComparison {
    eq?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    iLike?: Nullable<string>;
    in?: Nullable<string[]>;
    is?: Nullable<boolean>;
    isNot?: Nullable<boolean>;
    like?: Nullable<string>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    neq?: Nullable<string>;
    notILike?: Nullable<string>;
    notIn?: Nullable<string[]>;
    notLike?: Nullable<string>;
}

export class LocationDeleteFilter {
    and?: Nullable<LocationDeleteFilter[]>;
    id?: Nullable<IDFilterComparison>;
    location?: Nullable<StringFieldComparison>;
    or?: Nullable<LocationDeleteFilter[]>;
}

export class LocationFilter {
    and?: Nullable<LocationFilter[]>;
    id?: Nullable<IDFilterComparison>;
    location?: Nullable<StringFieldComparison>;
    or?: Nullable<LocationFilter[]>;
}

export class LocationInputDTO {
    id: string;
    location: string;
    region?: Nullable<RegionInputDTO>;
    sector: string[];
}

export class LocationSort {
    direction: SortDirection;
    field: LocationSortFields;
    nulls?: Nullable<SortNulls>;
}

export class LocationUpdateFilter {
    and?: Nullable<LocationUpdateFilter[]>;
    id?: Nullable<IDFilterComparison>;
    location?: Nullable<StringFieldComparison>;
    or?: Nullable<LocationUpdateFilter[]>;
}

export class NumberFieldComparison {
    between?: Nullable<NumberFieldComparisonBetween>;
    eq?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
    in?: Nullable<number[]>;
    is?: Nullable<boolean>;
    isNot?: Nullable<boolean>;
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    neq?: Nullable<number>;
    notBetween?: Nullable<NumberFieldComparisonBetween>;
    notIn?: Nullable<number[]>;
}

export class NumberFieldComparisonBetween {
    lower: number;
    upper: number;
}

export class RegionDeleteFilter {
    and?: Nullable<RegionDeleteFilter[]>;
    id?: Nullable<IDFilterComparison>;
    or?: Nullable<RegionDeleteFilter[]>;
    region?: Nullable<StringFieldComparison>;
}

export class RegionFilter {
    and?: Nullable<RegionFilter[]>;
    id?: Nullable<IDFilterComparison>;
    or?: Nullable<RegionFilter[]>;
    region?: Nullable<StringFieldComparison>;
}

export class RegionInputDTO {
    id: string;
    locations?: Nullable<LocationInputDTO[]>;
    region?: Nullable<string>;
}

export class RegionSort {
    direction: SortDirection;
    field: RegionSortFields;
    nulls?: Nullable<SortNulls>;
}

export class RegionUpdateFilter {
    and?: Nullable<RegionUpdateFilter[]>;
    id?: Nullable<IDFilterComparison>;
    or?: Nullable<RegionUpdateFilter[]>;
    region?: Nullable<StringFieldComparison>;
}

export class SetCategoriesOnGetProductDTOInput {
    id: string;
    relationIds: string[];
}

export class SetLocationsOnRegionInput {
    id: string;
    relationIds: string[];
}

export class SetProductsOnUserDTOInput {
    id: string;
    relationIds: string[];
}

export class SetRegionOnLocationInput {
    id: string;
    relationId: string;
}

export class SetSubcategoriesOnCategoryDTOInput {
    id: string;
    relationIds: string[];
}

export class SetSubcategoriesOnGetProductDTOInput {
    id: string;
    relationIds: string[];
}

export class SetSubcategoriesOnSubcategoriesDTOInput {
    id: string;
    relationIds: string[];
}

export class StringFieldComparison {
    eq?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    iLike?: Nullable<string>;
    in?: Nullable<string[]>;
    is?: Nullable<boolean>;
    isNot?: Nullable<boolean>;
    like?: Nullable<string>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    neq?: Nullable<string>;
    notILike?: Nullable<string>;
    notIn?: Nullable<string[]>;
    notLike?: Nullable<string>;
}

export class SubcategoriesDTODeleteFilter {
    and?: Nullable<SubcategoriesDTODeleteFilter[]>;
    id?: Nullable<StringFieldComparison>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<SubcategoriesDTODeleteFilter[]>;
}

export class SubcategoriesDTOFilter {
    and?: Nullable<SubcategoriesDTOFilter[]>;
    id?: Nullable<StringFieldComparison>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<SubcategoriesDTOFilter[]>;
}

export class SubcategoriesDTOSort {
    direction: SortDirection;
    field: SubcategoriesDTOSortFields;
    nulls?: Nullable<SortNulls>;
}

export class SubcategoriesDTOUpdateFilter {
    and?: Nullable<SubcategoriesDTOUpdateFilter[]>;
    id?: Nullable<StringFieldComparison>;
    name?: Nullable<StringFieldComparison>;
    or?: Nullable<SubcategoriesDTOUpdateFilter[]>;
}

export class SubcategoriesInputDTO {
    childSubcategories?: Nullable<SubcategoriesInputDTO[]>;
    id: string;
    name?: Nullable<string>;
    subcategories: SubcategoriesInputDTO[];
}

export class UpdateCategoryDTO {
    id?: Nullable<string>;
    name?: Nullable<string>;
    subcategories?: Nullable<SubcategoriesInputDTO>;
}

export class UpdateGetProductDTO {
    _id?: Nullable<string>;
    author?: Nullable<string>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    images?: Nullable<string[]>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    productDetails?: Nullable<string>;
    thumbnail?: Nullable<string>;
}

export class UpdateLocation {
    id?: Nullable<string>;
    location?: Nullable<string>;
    region?: Nullable<RegionInputDTO>;
    sector?: Nullable<string[]>;
}

export class UpdateManyCategoryDTOSInput {
    filter: CategoryDTOUpdateFilter;
    update: UpdateCategoryDTO;
}

export class UpdateManyGetProductDTOSInput {
    filter: GetProductDTOUpdateFilter;
    update: UpdateGetProductDTO;
}

export class UpdateManyLocationsInput {
    filter: LocationUpdateFilter;
    update: UpdateLocation;
}

export class UpdateManyRegionsInput {
    filter: RegionUpdateFilter;
    update: UpdateRegion;
}

export class UpdateManySubcategoriesDTOSInput {
    filter: SubcategoriesDTOUpdateFilter;
    update: UpdateSubcategoriesDTO;
}

export class UpdateManyUserDTOSInput {
    filter: UserDTOUpdateFilter;
    update: UpdateUserDTO;
}

export class UpdateOneCategoryDTOInput {
    id: string;
    update: UpdateCategoryDTO;
}

export class UpdateOneGetProductDTOInput {
    id: string;
    update: UpdateGetProductDTO;
}

export class UpdateOneLocationInput {
    id: string;
    update: UpdateLocation;
}

export class UpdateOneRegionInput {
    id: string;
    update: UpdateRegion;
}

export class UpdateOneSubcategoriesDTOInput {
    id: string;
    update: UpdateSubcategoriesDTO;
}

export class UpdateOneUserDTOInput {
    id: string;
    update: UpdateUserDTO;
}

export class UpdateRegion {
    id?: Nullable<string>;
    region?: Nullable<string>;
}

export class UpdateSubcategoriesDTO {
    childSubcategories?: Nullable<SubcategoriesInputDTO[]>;
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class UpdateUserDTO {
    _id?: Nullable<string>;
    access_token?: Nullable<string>;
    email?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    refresh_token?: Nullable<string>;
}

export class UserDTODeleteFilter {
    and?: Nullable<UserDTODeleteFilter[]>;
    email?: Nullable<StringFieldComparison>;
    firstName?: Nullable<StringFieldComparison>;
    lastName?: Nullable<StringFieldComparison>;
    or?: Nullable<UserDTODeleteFilter[]>;
}

export class UserDTOFilter {
    and?: Nullable<UserDTOFilter[]>;
    email?: Nullable<StringFieldComparison>;
    firstName?: Nullable<StringFieldComparison>;
    lastName?: Nullable<StringFieldComparison>;
    or?: Nullable<UserDTOFilter[]>;
}

export class UserDTOSort {
    direction: SortDirection;
    field: UserDTOSortFields;
    nulls?: Nullable<SortNulls>;
}

export class UserDTOUpdateFilter {
    and?: Nullable<UserDTOUpdateFilter[]>;
    email?: Nullable<StringFieldComparison>;
    firstName?: Nullable<StringFieldComparison>;
    lastName?: Nullable<StringFieldComparison>;
    or?: Nullable<UserDTOUpdateFilter[]>;
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
    subcategories?: Nullable<SubcategoriesDTO[]>;
}

export class CategoryDTO {
    id: string;
    name: string;
    subcategories: SubcategoriesDTO[];
}

export class CategoryDTOConnection {
    edges: CategoryDTOEdge[];
    pageInfo: PageInfo;
}

export class CategoryDTODeleteResponse {
    id?: Nullable<string>;
    name?: Nullable<string>;
    subcategories?: Nullable<SubcategoriesDTO>;
}

export class CategoryDTOEdge {
    cursor: ConnectionCursor;
    node: CategoryDTO;
}

export class CreateCategoryDTO {
    name: string;
    subcategories?: Nullable<CreateSubcategoriesDTO[]>;
}

export class CreateSubcategoriesDTO {
    childSubcategories?: Nullable<CreateSubcategoriesDTO[]>;
    name: string;
}

export class DeleteManyResponse {
    deletedCount: number;
}

export class FormField {
    _id: string;
    label: string;
    options: string[];
    type: string;
    validationSchema: string;
}

export class GetProductDTO {
    _id: string;
    author: string;
    categories: CategoryDTO[];
    currency: string;
    description: string;
    images: string[];
    name: string;
    price: number;
    productDetails: string;
    subcategories: SubcategoriesDTO[];
    thumbnail: string;
}

export class GetProductDTOConnection {
    edges: GetProductDTOEdge[];
    pageInfo: PageInfo;
}

export class GetProductDTODeleteResponse {
    _id?: Nullable<string>;
    author?: Nullable<string>;
    currency?: Nullable<string>;
    description?: Nullable<string>;
    images?: Nullable<string[]>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    productDetails?: Nullable<string>;
    thumbnail?: Nullable<string>;
}

export class GetProductDTOEdge {
    cursor: ConnectionCursor;
    node: GetProductDTO;
}

export class Location {
    id: string;
    location: string;
    region?: Nullable<Region>;
    sector: string[];
}

export class LocationConnection {
    edges: LocationEdge[];
    pageInfo: PageInfo;
}

export class LocationDeleteResponse {
    id?: Nullable<string>;
    location?: Nullable<string>;
    region?: Nullable<Region>;
    sector?: Nullable<string[]>;
}

export class LocationEdge {
    cursor: ConnectionCursor;
    node: Location;
}

export abstract class IMutation {
    abstract LogIn(email: string, password: string): User | Promise<User>;

    abstract Register(input: UserInput): UserType | Promise<UserType>;

    abstract addCategoriesToGetProductDTO(input: AddCategoriesToGetProductDTOInput): GetProductDTO | Promise<GetProductDTO>;

    abstract addLocationsToRegion(input: AddLocationsToRegionInput): Region | Promise<Region>;

    abstract addProductsToUserDTO(input: AddProductsToUserDTOInput): UserDTO | Promise<UserDTO>;

    abstract addSubcategoriesToCategoryDTO(input: AddSubcategoriesToCategoryDTOInput): CategoryDTO | Promise<CategoryDTO>;

    abstract addSubcategoriesToGetProductDTO(input: AddSubcategoriesToGetProductDTOInput): GetProductDTO | Promise<GetProductDTO>;

    abstract addSubcategoriesToSubcategoriesDTO(input: AddSubcategoriesToSubcategoriesDTOInput): SubcategoriesDTO | Promise<SubcategoriesDTO>;

    abstract createCategoriesWithSubcategories(categories: CreateCategoriesInput): Category[] | Promise<Category[]>;

    abstract createCategoryWithSubcategories(category: CreateCategoryInput): Category | Promise<Category>;

    abstract createFieldFromString(createField: CreateFieldFromStringDTO): FormField | Promise<FormField>;

    abstract createManyCategoryDTOS(input: CreateManyCategoryDTOSInput): CategoryDTO[] | Promise<CategoryDTO[]>;

    abstract createManyGetProductDTOS(input: CreateManyGetProductDTOSInput): GetProductDTO[] | Promise<GetProductDTO[]>;

    abstract createManyLocations(input: CreateManyLocationsInput): Location[] | Promise<Location[]>;

    abstract createManyRegions(input: CreateManyRegionsInput): Region[] | Promise<Region[]>;

    abstract createManySubcategoriesDTOS(input: CreateManySubcategoriesDTOSInput): SubcategoriesDTO[] | Promise<SubcategoriesDTO[]>;

    abstract createManyUserDTOS(input: CreateManyUserDTOSInput): UserDTO[] | Promise<UserDTO[]>;

    abstract createOneCategoryDTO(input: CreateOneCategoryDTOInput): CategoryDTO | Promise<CategoryDTO>;

    abstract createOneGetProductDTO(input: CreateOneGetProductDTOInput): GetProductDTO | Promise<GetProductDTO>;

    abstract createOneLocation(input: CreateOneLocationInput): Location | Promise<Location>;

    abstract createOneRegion(input: CreateOneRegionInput): Region | Promise<Region>;

    abstract createOneSubcategoriesDTO(input: CreateOneSubcategoriesDTOInput): SubcategoriesDTO | Promise<SubcategoriesDTO>;

    abstract createOneUserDTO(input: CreateOneUserDTOInput): UserDTO | Promise<UserDTO>;

    abstract deleteManyCategoryDTOS(input: DeleteManyCategoryDTOSInput): DeleteManyResponse | Promise<DeleteManyResponse>;

    abstract deleteManyGetProductDTOS(input: DeleteManyGetProductDTOSInput): DeleteManyResponse | Promise<DeleteManyResponse>;

    abstract deleteManyLocations(input: DeleteManyLocationsInput): DeleteManyResponse | Promise<DeleteManyResponse>;

    abstract deleteManyRegions(input: DeleteManyRegionsInput): DeleteManyResponse | Promise<DeleteManyResponse>;

    abstract deleteManySubcategoriesDTOS(input: DeleteManySubcategoriesDTOSInput): DeleteManyResponse | Promise<DeleteManyResponse>;

    abstract deleteManyUserDTOS(input: DeleteManyUserDTOSInput): DeleteManyResponse | Promise<DeleteManyResponse>;

    abstract deleteOneCategoryDTO(input: DeleteOneCategoryDTOInput): CategoryDTODeleteResponse | Promise<CategoryDTODeleteResponse>;

    abstract deleteOneGetProductDTO(input: DeleteOneGetProductDTOInput): GetProductDTODeleteResponse | Promise<GetProductDTODeleteResponse>;

    abstract deleteOneLocation(input: DeleteOneLocationInput): LocationDeleteResponse | Promise<LocationDeleteResponse>;

    abstract deleteOneRegion(input: DeleteOneRegionInput): RegionDeleteResponse | Promise<RegionDeleteResponse>;

    abstract deleteOneSubcategoriesDTO(input: DeleteOneSubcategoriesDTOInput): SubcategoriesDTODeleteResponse | Promise<SubcategoriesDTODeleteResponse>;

    abstract deleteOneUserDTO(input: DeleteOneUserDTOInput): UserDTODeleteResponse | Promise<UserDTODeleteResponse>;

    abstract removeAllFields(): boolean | Promise<boolean>;

    abstract removeAllUsers(): boolean | Promise<boolean>;

    abstract setCategoriesOnGetProductDTO(input: SetCategoriesOnGetProductDTOInput): GetProductDTO | Promise<GetProductDTO>;

    abstract setLocationsOnRegion(input: SetLocationsOnRegionInput): Region | Promise<Region>;

    abstract setProductsOnUserDTO(input: SetProductsOnUserDTOInput): UserDTO | Promise<UserDTO>;

    abstract setRegionOnLocation(input: SetRegionOnLocationInput): Location | Promise<Location>;

    abstract setSubcategoriesOnCategoryDTO(input: SetSubcategoriesOnCategoryDTOInput): CategoryDTO | Promise<CategoryDTO>;

    abstract setSubcategoriesOnGetProductDTO(input: SetSubcategoriesOnGetProductDTOInput): GetProductDTO | Promise<GetProductDTO>;

    abstract setSubcategoriesOnSubcategoriesDTO(input: SetSubcategoriesOnSubcategoriesDTOInput): SubcategoriesDTO | Promise<SubcategoriesDTO>;

    abstract updateManyCategoryDTOS(input: UpdateManyCategoryDTOSInput): UpdateManyResponse | Promise<UpdateManyResponse>;

    abstract updateManyGetProductDTOS(input: UpdateManyGetProductDTOSInput): UpdateManyResponse | Promise<UpdateManyResponse>;

    abstract updateManyLocations(input: UpdateManyLocationsInput): UpdateManyResponse | Promise<UpdateManyResponse>;

    abstract updateManyRegions(input: UpdateManyRegionsInput): UpdateManyResponse | Promise<UpdateManyResponse>;

    abstract updateManySubcategoriesDTOS(input: UpdateManySubcategoriesDTOSInput): UpdateManyResponse | Promise<UpdateManyResponse>;

    abstract updateManyUserDTOS(input: UpdateManyUserDTOSInput): UpdateManyResponse | Promise<UpdateManyResponse>;

    abstract updateOneCategoryDTO(input: UpdateOneCategoryDTOInput): CategoryDTO | Promise<CategoryDTO>;

    abstract updateOneGetProductDTO(input: UpdateOneGetProductDTOInput): GetProductDTO | Promise<GetProductDTO>;

    abstract updateOneLocation(input: UpdateOneLocationInput): Location | Promise<Location>;

    abstract updateOneRegion(input: UpdateOneRegionInput): Region | Promise<Region>;

    abstract updateOneSubcategoriesDTO(input: UpdateOneSubcategoriesDTOInput): SubcategoriesDTO | Promise<SubcategoriesDTO>;

    abstract updateOneUserDTO(input: UpdateOneUserDTOInput): UserDTO | Promise<UserDTO>;

    abstract userCreateProduct(product: CreateProductInput, userId: string): UserType | Promise<UserType>;
}

export class PageInfo {
    endCursor?: Nullable<ConnectionCursor>;
    hasNextPage?: Nullable<boolean>;
    hasPreviousPage?: Nullable<boolean>;
    startCursor?: Nullable<ConnectionCursor>;
}

export class ProductEntity {
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
    abstract categoryDTO(id: string): CategoryDTO | Promise<CategoryDTO>;

    abstract categoryDTOS(filter: CategoryDTOFilter, paging: CursorPaging, sorting: CategoryDTOSort[]): CategoryDTOConnection | Promise<CategoryDTOConnection>;

    abstract findAllFields(): FormField[] | Promise<FormField[]>;

    abstract getCategories(): Category[] | Promise<Category[]>;

    abstract getCategory(categoryName: string): Category | Promise<Category>;

    abstract getProductDTO(id: string): GetProductDTO | Promise<GetProductDTO>;

    abstract getProductDTOS(filter: GetProductDTOFilter, paging: CursorPaging, sorting: GetProductDTOSort[]): GetProductDTOConnection | Promise<GetProductDTOConnection>;

    abstract location(id: string): Location | Promise<Location>;

    abstract locations(filter: LocationFilter, paging: CursorPaging, sorting: LocationSort[]): LocationConnection | Promise<LocationConnection>;

    abstract me(): User | Promise<User>;

    abstract region(id: string): Region | Promise<Region>;

    abstract regions(filter: RegionFilter, paging: CursorPaging, sorting: RegionSort[]): RegionConnection | Promise<RegionConnection>;

    abstract subcategoriesDTO(id: string): SubcategoriesDTO | Promise<SubcategoriesDTO>;

    abstract subcategoriesDTOS(filter: SubcategoriesDTOFilter, paging: CursorPaging, sorting: SubcategoriesDTOSort[]): SubcategoriesDTOConnection | Promise<SubcategoriesDTOConnection>;

    abstract userDTO(id: string): UserDTO | Promise<UserDTO>;

    abstract userDTOS(filter: UserDTOFilter, paging: CursorPaging, sorting: UserDTOSort[]): UserDTOConnection | Promise<UserDTOConnection>;

    abstract users(): UserType[] | Promise<UserType[]>;
}

export class Region {
    id: string;
    locations?: Nullable<Location[]>;
    region?: Nullable<string>;
}

export class RegionConnection {
    edges: RegionEdge[];
    pageInfo: PageInfo;
}

export class RegionDeleteResponse {
    id?: Nullable<string>;
    region?: Nullable<string>;
}

export class RegionEdge {
    cursor: ConnectionCursor;
    node: Region;
}

export class SubcategoriesDTO {
    childSubcategories?: Nullable<SubcategoriesDTO[]>;
    id: string;
    name?: Nullable<string>;
    subcategories: SubcategoriesDTO[];
}

export class SubcategoriesDTOConnection {
    edges: SubcategoriesDTOEdge[];
    pageInfo: PageInfo;
}

export class SubcategoriesDTODeleteResponse {
    childSubcategories?: Nullable<SubcategoriesDTO[]>;
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class SubcategoriesDTOEdge {
    cursor: ConnectionCursor;
    node: SubcategoriesDTO;
}

export class Subcategory {
    childSubcategories?: Nullable<Subcategory[]>;
    name: string;
}

export class UpdateManyResponse {
    updatedCount: number;
}

export class User {
    _id: string;
    access_token?: Nullable<string>;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    products: ProductEntity[];
    refresh_token?: Nullable<string>;
}

export class UserDTO {
    _id: string;
    access_token?: Nullable<string>;
    email: string;
    firstName: string;
    lastName: string;
    products: GetProductDTO[];
    refresh_token?: Nullable<string>;
}

export class UserDTOConnection {
    edges: UserDTOEdge[];
    pageInfo: PageInfo;
}

export class UserDTODeleteResponse {
    _id?: Nullable<string>;
    access_token?: Nullable<string>;
    email?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    refresh_token?: Nullable<string>;
}

export class UserDTOEdge {
    cursor: ConnectionCursor;
    node: UserDTO;
}

export class UserType {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    products: ProductEntity[];
}

export type ConnectionCursor = any;
type Nullable<T> = T | null;
