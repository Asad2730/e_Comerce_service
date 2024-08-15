import { IsString, IsEmail } from 'class-validator';


export class UpdateUserDto {
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


}
