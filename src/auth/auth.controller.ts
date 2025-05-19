import { Body, Controller, Get, HttpCode, Post, Req, Res, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/dto';
import { ApiBody, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(201)
    @Post("register")
    @UsePipes(ValidationPipe)
    @ApiBody({ type: UserDto })
    @ApiResponse({
        status: 201,
        schema: {
            example: {
                accessToken: 'ACCESS_TOKEN',
                refreshToken: 'REFRESH_TOKEN',
                user: {
                    id: 'userId123',
                    name: 'john',
                    email: 'john@example.com'
                }
            }
        }
    })
    async registration(@Body() dto: UserDto, @Res({ passthrough: true }) res) {
        const data = await this.authService.registration(dto)
        res.cookie('refreshToken', (await data.token).refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        return {
            accessToken: (await data.token).accessToken,
            refreshToken: (await data.token).refreshToken,
            user: data.user
        }
    }

    @HttpCode(201)
    @Post("login")
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            example: {
                email: "john@example.com",
                password: "12345678a"
            }
        }
    })
    @ApiResponse({
        status: 201,
        schema: {
            example: {
                accessToken: "Access Token",
                refreshToken: "Refresh Token",
                user: {
                    id: 'userId123',
                    name: 'john',
                    email: 'john@example.com'
                }
            }
        }
    })
    async login(@Body() dto: Omit<UserDto, "name">, @Res({ passthrough: true }) res) {
        const data = await this.authService.login(dto)
        res.cookie('refreshToken', (await data.tokens).refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        return {
            accessToken: (await data.tokens).accessToken,
            refreshToken: (await data.tokens).refreshToken,
            user: data.user
        }
    }

    @HttpCode(200)
    @Get("getMe")
    @ApiOperation({ summary: 'Get current logged-in user by refreshToken cookie' })
    @ApiResponse({
        status: 200,
        schema: {
            example: {
                id: 'userId123',
                name: 'john',
                email: 'john@example.com'
            }
        }
    })
    @ApiResponse({ status: 401, description: 'Unauthorized: Refresh token not provided or invalid' })
    @ApiCookieAuth()
    async getMe(@Req() req: any) {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) {
            return new UnauthorizedException("Bad authorization");
        }
        return this.authService.getMe(refreshToken)
    }
}
