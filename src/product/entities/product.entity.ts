import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	name: string;

	@Column({ nullable: true })
	description: string;

	@Column({ nullable: false })
	price: number;

	constructor(partial: Partial<Product>) {
		Object.assign(this, partial);
	}
}
