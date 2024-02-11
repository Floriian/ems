import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from './decorators/public.decorator';
import { RtGuard } from './guards/rt.guard';
import { Request } from 'express';
import { GetUserId } from './decorators/get-user-id.decorator';
import { Response } from '@nestjs/common';
import { SignInDto, SignUpDto } from '@ems/validation';
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/sign-in')
  async signIn(@Body() dto: SignInDto, @Response() res) {
    const tokens = await this.authService.signIn(dto);
    res.cookie('access_token', tokens.access_token, {
      httpOnly: true,
    });
    res.cookie('refresh_token', tokens.refresh_token, {
      httpOnly: true,
    });
  }

  @Public()
  @Post('/sign-up')
  signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }

  @UseGuards(RtGuard)
  @Post('logout')
  logout(@Req() req: Request) {
    return this.authService.logout(req.user['sub']);
  }

  @UseGuards(RtGuard)
  @Post('refresh')
  refresh(@Req() req: Request, @GetUserId() id: number) {
    const token = req.user['refreshToken'];
    return this.authService.refreshTokens(id, token);
  }
}
