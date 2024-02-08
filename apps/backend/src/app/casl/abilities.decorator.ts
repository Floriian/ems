import { SetMetadata } from '@nestjs/common';
import { Actions } from '../casl/actions.enum';
import { Subjects } from '../casl/casl-ability.factory';

export interface Requirements {
  action: Actions;
  subject: Subjects;
}

export const CHECK_ABILITY = 'CHECK_ABILITY';
export const CheckAbility = (...abilites: Requirements[]) =>
  SetMetadata(CHECK_ABILITY, abilites);
