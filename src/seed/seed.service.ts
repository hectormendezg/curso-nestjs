import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  /* Crear Constructor para la importacion del servicio */
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillCarsWithSeedData(BRANDS_SEED);
    return 'Seed Executed!';
  }
}
