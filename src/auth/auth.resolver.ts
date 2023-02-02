import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { CurrentUser } from 'src/auth/currentUser';
import { GqlAuthGuard } from 'src/auth/guards/gqlAuthGuard';
import { LocalGqlAuthGuard } from 'src/auth/guards/localGqlAuthGuard';
import { User } from 'src/users/users.schema';
import { UsersService } from 'src/users/users.service';

@Resolver(() => User)
export class AuthResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() user: User): Promise<User> {
    return this.usersService.findOneById(user._id);
  }

  @Mutation(() => User, { name: 'LogIn' })
  @UseGuards(LocalGqlAuthGuard)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @CurrentUser() user: User,
  ): Promise<any> {
    const { access_token } = await this.authService.login(user);

    return {
      access_token,
      ...user,
    };
  }
}
