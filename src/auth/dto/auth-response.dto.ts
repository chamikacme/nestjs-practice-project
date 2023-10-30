import { User } from '../../user/entities/user.entity';

export class AuthResponseDto {
  user: User;
  token: string;

  constructor(user: User, token: string) {
    this.user = user;
    this.token = token;
  }
}
