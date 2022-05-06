import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { RepresentantesModule } from './representantes/representantes.module';
import { MonitorModule } from './monitor/monitor.module';
import { FiltroModule } from './filtro/filtro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    PersonasModule,
    UsuariosModule,
    CuentasModule,
    RepresentantesModule,
    MonitorModule,
    FiltroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
