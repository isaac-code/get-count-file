import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TransformService } from './usecase/transform/transform.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly  transformService: TransformService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getCountOfWord')
  getCountOfWord(): Promise<{ count: number }>  {
    return this.transformService.getOccurrencyOfWord("US");
  }
}
