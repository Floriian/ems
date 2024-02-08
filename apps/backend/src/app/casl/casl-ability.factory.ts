import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { Actions } from './actions.enum';
import {
  InferSubjects,
  PureAbility,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
} from '@casl/ability';
import { UserRoles } from '../users/entities/user.roles';
export type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = PureAbility<[Actions, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, build } = new AbilityBuilder<PureAbility<[Actions, Subjects]>>(
      PureAbility as AbilityClass<AppAbility>
    );

    if (user.role === UserRoles.ADMIN) can(Actions.Manage, 'all');

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
