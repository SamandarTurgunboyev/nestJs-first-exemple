import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenService } from './token.service';
import { Token, TokenSchema } from 'src/schemas/token.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
    JwtModule.register({
      global: true, // JwtModule ni global qilish (ixtiyoriy)
      secret: "JwtNestjs", // Default secret (access token uchun)
      signOptions: { expiresIn: '1m' }, // Default expiresIn
    }),
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule { }