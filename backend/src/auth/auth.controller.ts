import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) response: Response) {
        const { access_token } = await this.authService.login(loginDto);
        response.cookie('jwt', access_token, {
            httpOnly: true, // La cookie no será accesible desde JavaScript (seguridad contra XSS)
            secure: process.env.NODE_ENV === 'production', // Solo HTTPS en producción
            sameSite: 'strict', // Protección contra CSRF
            maxAge: 24 * 60 * 60 * 1000, // Expirar después de 24 horas (en milisegundos)
        });
        return { message: 'Inicio de sesión exitoso', access_token };
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}