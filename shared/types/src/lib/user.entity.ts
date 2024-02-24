import { BaseEntity } from './base.entity';
import { UserRoles } from './user.roles';
export class User extends BaseEntity {
  email: string;
  role: UserRoles;
  password: string;
  token?: string;
}
