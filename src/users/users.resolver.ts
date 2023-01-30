import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './dto/user.input';
import { CreateProductInput } from 'src/products/dto/create-product.input';

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

  @Mutation(() => UserType, { name: 'userCreateProduct' })
  async createProduct(
    @Args('userId') userId: string,
    @Args('product') product: CreateProductInput,
  ) {
    return this.usersService.createProduct(userId, product);
  }
}
