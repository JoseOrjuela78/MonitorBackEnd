import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxyMonitorClient } from '../common/proxy/client-proxy';
import { Observable } from 'rxjs';
import { IMonitor } from 'src/common/interface/monitor.interface';
import { MonitorDTO } from './dto/monitor.dto';
import { MonitorMSG } from '../common/constants';

@Controller('api/v2/monitor')
export class MonitorController {
  constructor(private readonly clientProxy: ClientProxyMonitorClient) {}
  private _clientProxyMonitors = this.clientProxy.clientProxyMonitors();
  @Post()
  create(@Body() monitorDTO: MonitorDTO): Observable<IMonitor> {
    return this._clientProxyMonitors.send(MonitorMSG.CREATE, monitorDTO);
  }

  @Get()
  findAll(): Observable<IMonitor[]> {
    return this._clientProxyMonitors.send(MonitorMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IMonitor> {
    return this._clientProxyMonitors.send(MonitorMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() monitorDTO: MonitorDTO,
  ): Observable<IMonitor> {
    return this._clientProxyMonitors.send(MonitorMSG.UPDATE, {
      id,
      monitorDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyMonitors.send(MonitorMSG.DELETE, id);
  }
}
