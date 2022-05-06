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
import { PersonaMSG } from 'src/common/constants';
import { ClientProxyMonitorClient } from 'src/common/proxy/client-proxy';
import { RepresentanteMSG } from '../common/constants';
import { RepresentanteDTO } from './dto/representante.dto';
import { IRepresentante } from '../common/interface/representante.interface';

@Controller('api/v2/representantes')
export class RepresentantesController {
  constructor(private readonly clientProxy: ClientProxyMonitorClient) {}
  private _clientProxyPersonas = this.clientProxy.clientProxyPersonas();
  private _clientProxyRepresentantes =
    this.clientProxy.clientProxyRepresentantes();

  @Post()
  async create(
    @Body() representanteDTO: RepresentanteDTO,
  ): Promise<Observable<IRepresentante>> {
    await this._clientProxyPersonas.send(PersonaMSG.CREATE, representanteDTO);
    return this._clientProxyRepresentantes.send(
      RepresentanteMSG.CREATE,
      representanteDTO,
    );
  }

  @Get()
  findAll(): Observable<IRepresentante[]> {
    return this._clientProxyRepresentantes.send(RepresentanteMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IRepresentante> {
    return this._clientProxyRepresentantes.send(RepresentanteMSG.FIND_ONE, id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() representanteDTO: RepresentanteDTO,
  ): Promise<Observable<IRepresentante>> {
    await this._clientProxyPersonas.send(PersonaMSG.UPDATE, {
      id,
      representanteDTO,
    });
    return this._clientProxyRepresentantes.send(RepresentanteMSG.UPDATE, {
      id,
      representanteDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyRepresentantes.send(RepresentanteMSG.DELETE, id);
  }
}
