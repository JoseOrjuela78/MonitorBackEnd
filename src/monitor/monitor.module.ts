import { Module } from '@nestjs/common';
import { MonitorController } from './monitor.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [MonitorController],
})
export class MonitorModule {}
