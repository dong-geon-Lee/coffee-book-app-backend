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

  @Column({ type: 'json' })
  sizes: string;

  @Column({ type: 'json' })
  price: number;

  @Column({ type: 'json' })
  stars: number;

  @Column()
  likes: boolean;

  @Column({ type: 'json' })
  product: { id: number; size: string; price: number; active: boolean }[];
}
