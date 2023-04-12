import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    return this.carsService.findById(id);
  }
  @Post()
  createCar(@Body() body: any) {
    return body;
  }
  @Patch(':id')
  updateCar(@Body() body: any, @Param('id') id: number) {
    return console.log(body, id);
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      msg: 'Vehículo eliminado ',
      id,
    };
  }
}
