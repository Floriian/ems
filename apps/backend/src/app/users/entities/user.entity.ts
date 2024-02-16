import argon2 from 'argon2';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
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

  @BeforeInsert()
  @BeforeUpdate()
  async hashFields() {
    this.password = await argon2.hash(this.password);
    this.token = await argon2.hash(this.token);
  }
}

export type UserRepository = Repository<User>;
