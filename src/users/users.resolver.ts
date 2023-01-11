import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './dto/user.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserInput) {
    return this.usersService.create(input);
  }

  @Query(() => [UserType], { name: 'users' })
  async getUsers() {
    return this.usersService.findAll();
  }
}
