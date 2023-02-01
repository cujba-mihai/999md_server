import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import encrypt from 'src/utils/encryption';
import { User } from '../users/users.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  @Inject(ConfigService)
  public config: ConfigService;

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOneByEmail(email);
    const encryptedPass = encrypt(pass, this.config.get('CRYPTO_SECRET_KEY'));

    if (user && user.password === encryptedPass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result as User;
    }
    return null;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
