export class CreateCoffeeDto {
  title: string;
  description: string;
  type: string;
  image: string;
  sizes: string;
  price: number;
  stars: number;
  likes: boolean;
  product: {
    id: number;
    size: string;
    price: number;
    active: boolean;
  }[];
}
