import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Butun loyihada global bo'ladi
      envFilePath: '.env',
    }),
    BlogModule, MongooseModule.forRoot(process.env.MONGO_DB_URL!),
    AuthModule,
    TokenModule
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('/blog/:id');
  }
}
