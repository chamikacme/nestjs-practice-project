import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Burger',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The description of the product',
    example: 'A delicious burger',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 599.99,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
