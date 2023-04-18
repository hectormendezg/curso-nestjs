import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car-dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];
  findAll() {
    return this.cars;
  }
  findById(id: string) {
    // return this.cars[id];
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car whith id ${id} not found`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      /*  brand: createCarDto.brand,
      model: createCarDto.model, */
      ...createCarDto, //===> Con expredOperator
    };
    //Agregarlo al Array
    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB, //=> exparse las propiedades de carDB
          ...updateCarDto, //=> Sobre escribe las anteriores
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    /*    const car =  */ this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return;
  }
}
