import { Controller, Post, Body, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { RtGuard } from './guards/rt.guard';
import type { Request, Response } from 'express';
import { GetUserId } from './decorators/get-user-id.decorator';
import { SignInDto, SignUpDto } from '@ems/validation';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/sign-in')
  async signIn(
    @Body() dto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const tokens = await this.authService.signIn(dto);
    res.cookie('access_token', tokens.access_token, {
      httpOnly: true,
    });
    res.cookie('refresh_token', tokens.refresh_token, {
      httpOnly: true,
    });

    return true;
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
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @GetUserId() id: number
  ) {
    const token = req.cookies['refresh_token'];
    const tokens = await this.authService.refreshTokens(id, token);
    res.cookie('access_token', tokens.access_token, {
      httpOnly: true,
    });
    res.cookie('refresh_token', tokens.refresh_token, {
      httpOnly: true,
    });
    return true;
  }
}
