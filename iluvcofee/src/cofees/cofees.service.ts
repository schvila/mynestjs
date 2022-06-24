import { Injectable } from '@nestjs/common';
import { threadId } from 'worker_threads';
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
    return this.cofees.find((item) => item.id === +id);
  }
  create(createCofeeDto: any) {
    this.cofees.push(createCofeeDto);
  }
  update(id: string, createCofeeDto: any) {
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
