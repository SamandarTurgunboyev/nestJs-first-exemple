"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: { origin: '*', credentials: true },
    });
    app.use((0, cookie_parser_1.default)());
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