import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from './casl-ability.factory';
import { Observable } from 'rxjs';
import { CHECK_ABILITY, Requirements } from './abilities.decorator';
@Injectable()
export class AbilityGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly caslAbilityFactory: CaslAbilityFactory
  ) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const rules = this.reflector.get<Requirements[]>(
      CHECK_ABILITY,
      context.getHandler()
    );
    const { user } = request.user;
    const ability = this.caslAbilityFactory.createForUser(user);

    const isValid = rules.map(({ action, subject }) =>
      ability.can(action, subject)
    );

    if (isValid.includes(false)) throw new UnauthorizedException();
    return true;
  }
}
