import { Controller, Get } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller()
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  getHello(): string {
    return this.brandService.getHello();
  }
}
