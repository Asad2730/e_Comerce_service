import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandService {
  getHello(): string {
    return 'Hello World!';
  }
}
