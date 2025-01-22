import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return {
      ok: true,
      payload: createCarDto,
    };
  }

  @Patch(':id')
  patchCar(@Param('id', ParseUUIDPipe) id: string, @Body() payload) {
    return {
      ok: true,
      id,
      payload,
    };
  }

  @Put(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() payload) {
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
