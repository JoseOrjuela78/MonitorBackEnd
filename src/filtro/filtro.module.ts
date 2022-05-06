import { Module } from '@nestjs/common';
import { FiltroController } from './filtro.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports:[ProxyModule],
  controllers: [FiltroController],
})
export class FiltroModule {}
