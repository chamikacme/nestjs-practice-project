import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  price: number;

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  user: User;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
