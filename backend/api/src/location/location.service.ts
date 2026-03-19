import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private repo: Repository<Location>,
  ) {}

  async create() {
    const loc = this.repo.create({
      name: 'Punto La Paz',
      geom: 'POINT(-68.15 -16.5)',
    });

    return this.repo.save(loc);
  }

  findAll() {
    return this.repo.find();
  }
}
