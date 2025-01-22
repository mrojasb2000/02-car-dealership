import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  generate() {
    this.carsService.fillCarsWithSeedDataMock(CARS_SEED);
    this.brandsService.fillBrandsWithSeedDataMock(BRANDS_SEED);
    return 'Data mock created successfully';
  }
}
