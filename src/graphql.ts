/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
  exampleField?: Nullable<number>;
}

export class UpdateUserInput {
  id: number;
}

export class Author {
  id: number;
  firstName?: Nullable<string>;
  lastName?: Nullable<string>;
  posts?: Nullable<Nullable<Post>[]>;
}

export class Post {
  id: number;
  title: string;
  votes?: Nullable<number>;
}

export abstract class IQuery {
  abstract author(id: number): Nullable<Author> | Promise<Nullable<Author>>;

  abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

  abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
  abstract upvotePost(postId: number): Nullable<Post> | Promise<Nullable<Post>>;

  abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

  abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

  abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
  exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
