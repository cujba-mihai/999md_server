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

export class UserInput {
  email: string;
  firstName: string;
  lastName: string;
}

export class Category {
  id: string;
  name: string;
}

export abstract class IMutation {
  abstract createCategories(
    createCategoriesInput: CreateCategoriesInput,
  ): Category[] | Promise<Category[]>;

  abstract createUser(input: UserInput): UserType | Promise<UserType>;
}

export abstract class IQuery {
  abstract categories(): Category[] | Promise<Category[]>;

  abstract users(): UserType[] | Promise<UserType[]>;
}

export class UserType {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
}

type Nullable<T> = T | null;
