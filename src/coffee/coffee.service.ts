import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee) private coffeeRepository: Repository<Coffee>,
  ) {}

  async create(dto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(dto);
    return await this.coffeeRepository.save(coffee);
  }

  async findAll() {
    return await this.coffeeRepository.find();
  }

  async findOne(id: number) {
    return await this.coffeeRepository.find({ where: { id } });
  }

  async update(id: number, dto: CreateCoffeeDto) {
    const coffee = await this.coffeeRepository.findOne({ where: { id } });
    const updatedCoffee = { ...coffee, ...dto };
    return await this.coffeeRepository.save(updatedCoffee);
  }

  async remove(id: number) {
    const coffee = await this.coffeeRepository.findOne({ where: { id } });
    return await this.coffeeRepository.delete(coffee);
  }
}
