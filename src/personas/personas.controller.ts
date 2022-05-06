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
import { PersonaDTO } from './dto/persona.dto';
import { IPersona } from '../common/interface/persona.interface';
import { PersonaMSG } from '../common/constants';
import { Observable } from 'rxjs';

@Controller('api/v2/personas')
export class PersonasController {
  constructor(private readonly clientProxy: ClientProxyMonitorClient) {}
  private _clientProxyPersona = this.clientProxy.clientProxyPersonas();

  @Post()
  create(@Body() personaDTO: PersonaDTO): Observable<IPersona> {
    return this._clientProxyPersona.send(PersonaMSG.CREATE, personaDTO);
  }

  @Get()
  findAll(): Observable<IPersona[]> {
    return this._clientProxyPersona.send(PersonaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IPersona> {
    return this._clientProxyPersona.send(PersonaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() personaDTO: PersonaDTO,
  ): Observable<IPersona> {
    return this._clientProxyPersona.send(PersonaMSG.UPDATE, { id, personaDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyPersona.send(PersonaMSG.DELETE, id);
  }
}
