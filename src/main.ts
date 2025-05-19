import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*', credentials: true },
  });

  app.use(cookieParser());
  app.setGlobalPrefix('/api/v1');

  // Swagger konfiguratsiyasi
  const config = new DocumentBuilder()
    .setTitle('API Docs')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('auth')
    .addCookieAuth('refreshToken')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // 👇 Redirect `/` → `/api`
  app.use((req, res: Response, next) => {
    if (req.path === '/') {
      return res.redirect('/api');
    }
    next();
  });

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
