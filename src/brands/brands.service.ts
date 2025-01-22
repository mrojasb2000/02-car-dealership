import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    /* {
      id: '11482f2c-ee1d-4938-968d-574fa82baec7',
      name: 'Audi',
      createAt: 1737580673,
    }, */
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const newBrand: Brand = {
      id: uuid(),
      name,
      createAt: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with id '${id}' not found.`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);

    if (updateBrandDto.id && updateBrandDto.id !== id)
      throw new BadRequestException(`Car id property is not valid`);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDb = {
          ...brandDb,
          ...updateBrandDto,
          updateAt: new Date().getTime(),
          id,
        };
        return brandDb;
      }
      return brand;
    });

    return brandDb;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedDataMock(brands: Brand[]) {
    this.brands = brands;
  }
}
