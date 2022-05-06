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
import { UsuarioDTO } from './dto/usuario.dto';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/common/interface/usuario.interface';
import { PersonaMSG, UsuarioMSG } from '../common/constants';

@Controller('api/v2/usuarios')
export class UsuariosController {
  constructor(private readonly clientProxy: ClientProxyMonitorClient) {}
  private _clientProxyPersonas = this.clientProxy.clientProxyPersonas();
  private _clientProxyUsuarios = this.clientProxy.clientProxyUsuarios();

  @Post()
  async create(@Body() usuarioDTO: UsuarioDTO): Promise<Observable<IUsuario>> {
    await this._clientProxyPersonas.send(PersonaMSG.CREATE, usuarioDTO);
    return this._clientProxyUsuarios.send(UsuarioMSG.CREATE, usuarioDTO);
  }

  @Get()
  findAll(): Observable<IUsuario[]> {
    return this._clientProxyUsuarios.send(UsuarioMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IUsuario> {
    return this._clientProxyUsuarios.send(UsuarioMSG.FIND_ALL, id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() usuarioDTO: UsuarioDTO,
  ): Promise<Observable<IUsuario>> {
    await this._clientProxyPersonas.send(PersonaMSG.UPDATE, {
      id,
      usuarioDTO,
    });
    return this._clientProxyUsuarios.send(UsuarioMSG.UPDATE, {
      id,
      usuarioDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUsuarios.send(UsuarioMSG.CREATE, id);
  }
}
