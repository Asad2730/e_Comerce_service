import { IsString, IsEmail, IsEnum } from 'class-validator';
import { Role } from 'proto/user';
export class CreateUserDto {
    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    passwordHash: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    address: string;

    @IsString()
    phoneNumber: string;

    @IsEnum(Role)
    role: Role;
}
