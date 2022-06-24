import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCofeeDto } from 'src/cofees/dto/create-cofee.dto';
import { threadId } from 'worker_threads';
import { UpdateCofeeDto } from './dto/update-cofee.dto';
import { Cofee } from './entities/cofee.entity';

@Injectable()
export class CofeesService {
  private cofees: Cofee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];
  findAll() {
    return this.cofees;
  }
  findOne(id: string) {
    const cofee = this.cofees.find((item) => item.id === +id);
    if (!cofee) {
      throw new HttpException(`Cofee# ${id} not found.`, HttpStatus.NOT_FOUND);
    }
    return cofee;
  }
  create(createCofeeDto: CreateCofeeDto): Cofee {
    const newId = this.cofees.length + 1;
    const newCoofee: Cofee = {
      id: newId,
      name: createCofeeDto.name,
      brand: createCofeeDto.brand,
      flavors: createCofeeDto.flavors,
    };
    this.cofees.push(newCoofee);
    return newCoofee;
  }
  update(id: string, updateCofeeDto: UpdateCofeeDto) {
    const existingCofee = this.cofees.find((item) => item.id === +id);
    if (existingCofee) {
      // update entity
    }
  }
  remove(id: string) {
    const cofeeIndex = this.cofees.findIndex((item) => item.id === +id);
    if (cofeeIndex >= 0) {
      this.cofees.splice(cofeeIndex, 1);
    }
  }
}
