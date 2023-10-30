import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class SecurityService {
  constructor(private jwtService: JwtService) {}

  async hashPassword(password: string) {
    return await hash(password, 10);
  }

  async comparePassword(password: string, hash: string) {
    return await compare(password, hash);
  }

  async generateJwt(user: User) {
    const payload = { email: user.email, sub: user.id };
    return await this.jwtService.signAsync(payload, {
      expiresIn: '1d',
      secret: process.env.JWT_SECRET,
    });
  }
}
