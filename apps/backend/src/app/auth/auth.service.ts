import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { TokenService } from '../token/token.service';
import { IncorrectPasswordException } from './exceptions/incorrect-password.exception';
import argon2 from 'argon2';
import { AccessDeniedException } from './exceptions/access-denied.exception';
import { SignInDto, SignUpDto } from '@ems/validation';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly tokenService: TokenService
  ) {}
  async signIn(dto: SignInDto) {
    const user = await this.usersService.findOneByEmail(dto.email);

    const isPasswordMatches = await argon2.verify(user.password, dto.password);
    if (!isPasswordMatches) throw new IncorrectPasswordException();

    const tokens = await this.tokenService.generateTokens({
      userId: user.id,
      email: user.email,
    });

    await this.updateToken(user.id, tokens.refresh_token);

    return tokens;
  }

  async updateToken(userId: number, token: string) {
    const result = await this.usersService.update(userId, {
      token: token,
    });
    return result;
  }

  async signUp(dto: SignUpDto) {
    const user = await this.usersService.create(dto);
    return await this.tokenService.generateTokens({
      userId: user.id,
      email: user.email,
    });
  }

  async logout(id: number) {
    return this.usersService.update(id, { token: null });
  }

  async refreshTokens(id: number, token: string) {
    const user = await this.usersService.findOneById(id);
    if (!user || !user.token) {
      console.log('no user.');
      throw new AccessDeniedException();
    }

    console.log('token req', token);
    console.log('user token', user.token);
    const tokena = await argon2.hash(token);
    console.log('hashed token', tokena);

    const isTokenMatches = user.token === token;
    if (!isTokenMatches) {
      console.log('token not matches.');
      throw new AccessDeniedException();
    }
    const tokens = await this.tokenService.generateTokens({
      email: user.email,
      userId: user.id,
    });

    await this.usersService.update(id, {
      token: tokens.refresh_token,
    });

    return tokens;
  }
}
