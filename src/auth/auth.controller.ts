import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userRegister: RegisterAuthDto) {
    return this.authService.register(userRegister);
  }

  @Post('login')
  loginUser(@Body() passport: LoginAuthDto) {
    return this.authService.login(passport);
  }
}
