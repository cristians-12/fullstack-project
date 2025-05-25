import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/model/user.model';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) { }

    async login(authPayload: { email: string; password: string })
        :
        Promise<{
            access_token: string,
            user: { email: string; role: string, id: number }
        }> {
        const user = await this.userService.findOne(authPayload.email);
        const { password, ...userInfo } = user;
        // console.log(authPayload.password, user.password);
        if (!await bcrypt.compare(authPayload.password, user.password)) {
            throw new UnauthorizedException('Las credenciales son incorrectas.');
        }
        const payload = { email: user.email, sub: user.id, role: user.role };
        return {
            access_token: await this.jwtService.signAsync(payload),
            user: userInfo
        };
    }
}