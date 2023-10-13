import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const coffee = this.userRepository.create(dto);
    return await this.userRepository.save(coffee);
  }

  // async findAll() {
  //   return await this.coffeeRepository.find();
  // }

  // async findOne(id: number) {
  //   return await this.coffeeRepository.find({ where: { id } });
  // }

  // async update(id: number, dto: CreateCoffeeDto) {
  //   const coffee = await this.coffeeRepository.findOne({ where: { id } });
  //   const updatedCoffee = { ...coffee, ...dto };
  //   return await this.coffeeRepository.save(updatedCoffee);
  // }

  // async remove(id: number) {
  //   const coffee = await this.coffeeRepository.findOne({ where: { id } });
  //   return await this.coffeeRepository.delete(coffee);
  // }
}
