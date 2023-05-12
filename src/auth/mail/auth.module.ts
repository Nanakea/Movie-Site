import { Module } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { AuthController } from '../auth.controller';
import { UsersService } from '../../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../local.strategy';
import { JwtStrategy } from '../jwt.strategy';
import { EmailService } from '../email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../../users/user.repository';
import { UsersModule } from '../../users/users.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([UserRepository]),
    UsersModule,
  ],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy, EmailService],
  controllers: [AuthController],
})
export class AuthModule {}