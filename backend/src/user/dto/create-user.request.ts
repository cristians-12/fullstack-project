import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserRequest {
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;


    @IsNotEmpty()
    role: 'USER' | 'ADMIN';
}