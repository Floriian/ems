import { Column, Entity, Repository } from 'typeorm';
import { UserRoles } from './user.roles';
import { BaseEntity } from '../../utils';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
  role: UserRoles;

  @Column()
  password: string;

  @Column({ nullable: true })
  token?: string;
}

export type UserRepository = Repository<User>;
