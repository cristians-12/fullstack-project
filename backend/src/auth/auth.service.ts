import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) { }

    async login(authPayload: { email: string; password: string }): Promise<{ access_token: string }> {
        const user = await this.userService.findOne(authPayload.email);
        // console.log(authPayload.password, user.password);
        if (!await bcrypt.compare(authPayload.password, user.password)) {
            throw new UnauthorizedException('La contraseña no coincide.');
        }
        const payload = { email: user.email, sub: user.id, role: user.role };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}