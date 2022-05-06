import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { IFiltro } from 'src/common/interface/filtro.interface';
import { ClientProxyMonitorClient } from '../common/proxy/client-proxy';
import { FiltroDTO } from './dto/filtro.dto';
import { FiltroMSG } from '../common/constants';

@Controller('api/v2/filtro')
export class FiltroController {
  constructor(private readonly clientProxy: ClientProxyMonitorClient) {}
  private _clientProxyFiltros = this.clientProxy.clientProxyFiltros();

  @Post()
  create(@Body() filtroDTO: FiltroDTO): Observable<IFiltro> {
    return this._clientProxyFiltros.send(FiltroMSG.CREATE, filtroDTO);
  }

  @Get()
  findAll(): Observable<IFiltro[]> {
    return this._clientProxyFiltros.send(FiltroMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IFiltro> {
    return this._clientProxyFiltros.send(FiltroMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() filtroDTO: FiltroDTO,
  ): Observable<IFiltro> {
    return this._clientProxyFiltros.send(FiltroMSG.UPDATE, { id, filtroDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyFiltros.send(FiltroMSG.DELETE, id);
  }
}
