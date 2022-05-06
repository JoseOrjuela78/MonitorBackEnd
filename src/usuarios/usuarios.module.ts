import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [UsuariosController]
})
export class UsuariosModule {}
