import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private coffeeService: CoffeeService) {}

  @Post()
  create(@Body() dto: CreateCoffeeDto) {
    return this.coffeeService.create(dto);
  }

  @Get()
  findAll() {
    return this.coffeeService.findAll();
  }
}
