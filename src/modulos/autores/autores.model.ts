import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controler';
import { AutoresService } from './autores.service';

@Module({
  controllers: [AutoresController],
  providers: [AutoresService],
  exports: [],
})
export class AutoresModels {}
