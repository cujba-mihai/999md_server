
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
    password: string;
}

export abstract class IMutation {
    abstract LogIn(email: string, password: string): User | Promise<User>;

    abstract Register(input: UserInput): UserType | Promise<UserType>;
}

export abstract class IQuery {
    abstract me(): User | Promise<User>;

    abstract users(): UserType[] | Promise<UserType[]>;
}

export class User {
    _id: string;
    access_token?: Nullable<string>;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    refresh_token?: Nullable<string>;
}

export class UserType {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
}

type Nullable<T> = T | null;
