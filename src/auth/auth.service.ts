import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { hash, compare } from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(userRegister: RegisterAuthDto) {
    const { password } = userRegister;
    const plaintToHash = await hash(password, 14);
    userRegister.password = plaintToHash;
    return this.userModel.create(userRegister);
  }

  async login(passport: LoginAuthDto) {
    const { email, password } = passport;
    const findUser = await this.userModel.findOne({ email });
    if (!findUser)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const chekPassword = await compare(password, findUser.password);
    if (!chekPassword)
      throw new HttpException('PASSWORD_INCORRECT', HttpStatus.FORBIDDEN);

    const payload = { userId: findUser._id };
    const token = this.jwtService.sign(payload);
    const data = { user: findUser, token };

    return data;
  }
}
