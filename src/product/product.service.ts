import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {

	constructor(
		@InjectRepository(Product)
		private readonly productRepository: Repository<Product>,
		private readonly entityManager: EntityManager) { }

	async create(createProductDto: CreateProductDto) {
		const product = new Product(createProductDto);
		await this.entityManager.save(product);
	}

	async findAll() {
		return await this.productRepository.find();
	}

	async findOne(id: number) {
		return await this.productRepository.findOneBy({ id });
	}

	async update(id: number, updateProductDto: UpdateProductDto) {
		return await this.productRepository.update(id, updateProductDto);		
	}

	async remove(id: number) {
		return await this.productRepository.delete(id);
	}
}
