import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [PersonasController],
})
export class PersonasModule {}
