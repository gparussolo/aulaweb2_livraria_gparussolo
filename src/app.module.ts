import { Module } from '@nestjs/common';
import { AutoresModels } from './modulos/autores/autores.model';

@Module({
  imports: [AutoresModels],
  controllers: [],
  providers: [],
})
export class AppModule {}
