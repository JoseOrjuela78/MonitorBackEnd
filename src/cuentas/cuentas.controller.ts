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
import { CuentaMSG, PersonaMSG } from 'src/common/constants';
import { ICuenta } from 'src/common/interface/cuenta.interface';
import { ClientProxyMonitorClient } from 'src/common/proxy/client-proxy';
import { CuentaDTO } from './dto/cuenta.dto';

@Controller('api/v2/cuentas')
export class CuentasController {
  constructor(private readonly clientProxy: ClientProxyMonitorClient) {}
  private _clientProxyPersonas = this.clientProxy.clientProxyPersonas();
  private _clientProxyCuenta = this.clientProxy.clientProxyCuentas();

  @Post()
  async create(@Body() cuentaDTO: CuentaDTO): Promise<Observable<ICuenta>> {
    await this._clientProxyPersonas.send(PersonaMSG.CREATE, cuentaDTO);
    return this._clientProxyCuenta.send(CuentaMSG.CREATE, cuentaDTO);
  }

  @Get()
  findAll(): Observable<ICuenta[]> {
    return this._clientProxyCuenta.send(CuentaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ICuenta> {
    return this._clientProxyCuenta.send(CuentaMSG.FIND_ONE, id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() cuentaDTO: CuentaDTO,
  ): Promise<Observable<ICuenta>> {
    await this._clientProxyPersonas.send(PersonaMSG.UPDATE, { id, cuentaDTO });
    return this._clientProxyCuenta.send(CuentaMSG.UPDATE, { id, cuentaDTO });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Observable<any>> {
    await this._clientProxyPersonas.send(PersonaMSG.DELETE, id);
    return this._clientProxyCuenta.send(CuentaMSG.DELETE, id);
  }
}
