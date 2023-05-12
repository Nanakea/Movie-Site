import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver('App')
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query()
  async hello(): Promise<string> {
    return this.appService.getHello();
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}