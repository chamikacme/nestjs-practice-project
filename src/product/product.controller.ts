import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { GetUser } from 'src/auth/decorator';
import { User } from 'src/user/entities/user.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@UseGuards(JwtGuard)
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiCreatedResponse({ description: 'The product has been successfully created.' })
  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @GetUser('id') id: number,
  ) {
    return this.productService.create(createProductDto, id);
  }

  @ApiOkResponse({ description: 'The products have been successfully returned.' })
  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @ApiOkResponse({ description: 'The product has been successfully returned.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @ApiOkResponse({ description: 'The product has been successfully updated.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(+id, updateProductDto);
  }

  @ApiOkResponse({ description: 'The product has been successfully deleted.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
