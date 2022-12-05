/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserInput {
  email: string;
  firstName: string;
  lastName: string;
}

export abstract class IMutation {
  abstract createUser(input: UserInput): UserType | Promise<UserType>;
}

export abstract class IQuery {
  abstract users(): UserType[] | Promise<UserType[]>;
}

export class UserType {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
}

type Nullable<T> = T | null;
