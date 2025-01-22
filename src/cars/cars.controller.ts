import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
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
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() payload) {
    return {
      ok: true,
      payload: payload,
    };
  }

  @Patch(':id')
  patchCar(@Param('id', ParseIntPipe) id: number, @Body() payload) {
    return {
      ok: true,
      id,
      payload,
    };
  }

  @Put(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() payload) {
    return {
      ok: true,
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      ok: true,
      id,
    };
  }
}
