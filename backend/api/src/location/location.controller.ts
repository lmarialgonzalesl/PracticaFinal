import { Controller, Get, Post } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
  constructor(private service: LocationService) {}

  @Post()
  create() {
    return this.service.create();
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
