import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    description: 'The price of the product',
    example: 599.99,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
