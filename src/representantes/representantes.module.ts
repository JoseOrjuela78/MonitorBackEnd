import { Module } from '@nestjs/common';
import { RepresentantesController } from './representantes.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports:[ProxyModule],
  controllers: [RepresentantesController],
})
export class RepresentantesModule {}
