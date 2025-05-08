import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from 'class-validator';

export class CreateUserRequest {
    @IsEmail()
    email: string;

    @IsStrongPassword()
    @MinLength(6)
    password: string;


    @IsNotEmpty()
    role: 'USER' | 'ADMIN';
}