import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    async validateUser(authPayload: AuthPayloadDto) {
        // const findUser = users.find((user) => user.useremail === username)
    }
}
