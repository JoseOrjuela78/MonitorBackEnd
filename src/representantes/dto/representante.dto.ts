import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class RepresentanteDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly tipoIdentificacion: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly numeroIdentificacion: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly razonSocial: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly cargo: number;
}
