import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
    @ApiProperty({ example: 'john@gmail.com', description: 'email' })
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({ example: '12345678a', description: 'password' })
    @IsNotEmpty()
    password: string

    @ApiProperty({ example: 'john', description: 'User name' })
    @IsNotEmpty()
    name: string
}
