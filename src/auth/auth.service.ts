import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { SecurityService } from './security.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(SecurityService)
    private readonly securityService: SecurityService,
  ) {}

  async signup(signupDto: SignupDto) {
    const user = await this.userService.findByEmail(signupDto.email);

    if (user) {
      return { msg: 'User already exists' };
    }

    signupDto.password = await this.securityService.hashPassword(
      signupDto.password,
    );
    const newUser = await this.userService.create(signupDto);
    newUser && delete newUser.password;

    const token = await this.securityService.generateJwt(newUser);

    return new AuthResponseDto(newUser, token);
  }

  async signin(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);

    if (!user) {
      return { msg: 'User not found' };
    }

    const isMatch = await this.securityService.comparePassword(
      loginDto.password,
      user.password,
    );

    if (!isMatch) {
      return { msg: 'Invalid credentials' };
    }

    const token = await this.securityService.generateJwt(user);

    user && delete user.password;

    return new AuthResponseDto(user, token);
  }
}
