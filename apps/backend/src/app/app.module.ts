import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { envSchema } from './env/env.schema';
import { EnvModule } from './env/env.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config';
import { TokenModule } from './token/token.module';
import { EventsModule } from './events/events.module';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeormConfig),
    EnvModule,
    AuthModule,
    TokenModule,
    EventsModule,
    CaslModule,
  ],
})
export class AppModule {}
