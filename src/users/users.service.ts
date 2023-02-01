import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { UserInput } from './dto/user.input';
import encrypt from '../utils/encryption';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  @Inject(ConfigService)
  public config: ConfigService;

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: UserInput): Promise<User> {
    const encryptedPass = encrypt(
      createUserDto.password,
      this.config.get('CRYPTO_SECRET_KEY'),
    );

    const createdUser = await this.userModel.create({
      ...createUserDto,
      password: encryptedPass,
    });

    const user = await createdUser.save();

    return Promise.resolve(user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async findOneById(id: string): Promise<User> {
    return this.userModel.findById(id).lean();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).lean();
  }
}
