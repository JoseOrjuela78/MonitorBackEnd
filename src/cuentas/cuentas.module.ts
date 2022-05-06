import { Module } from '@nestjs/common';
import { CuentasController } from './cuentas.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [CuentasController],
})
export class CuentasModule {}
