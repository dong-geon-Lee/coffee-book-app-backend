import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'coffees' })
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  image: string;

  @Column()
  sizes: string;

  @Column()
  price: number;

  @Column()
  stars: number;

  @Column()
  likes: boolean;

  @Column()
  product: { id: number; size: string; price: number; active: boolean }[];
}
