"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: { origin: '*', credentials: true },
    });
    app.use(cookieParser());
    app.setGlobalPrefix('/api/v1');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Docs')
        .setDescription('API documentation')
        .setVersion('1.0')
        .addTag('auth')
        .addCookieAuth('refreshToken')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use((req, res, next) => {
        if (req.path === '/') {
            return res.redirect('/api');
        }
        next();
    });
    await app.listen(process.env.PORT || 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map