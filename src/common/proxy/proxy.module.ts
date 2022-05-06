import { Module } from '@nestjs/common';
import { ClientProxyMonitorClient } from './client-proxy';

@Module({
  providers: [ClientProxyMonitorClient],
  exports: [ClientProxyMonitorClient],
})

export class ProxyModule{}