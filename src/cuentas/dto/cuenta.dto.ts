import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
export class CuentaDTO {
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
  @Type(() => Date)
  @IsDate()
  readonly fechaMatricula: Date;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fechaNacimiento: Date;
  @ApiProperty()
  @IsBoolean()
  readonly cliente: boolean;
  @ApiProperty()
  @IsBoolean()
  readonly proveedor: boolean;
  @ApiProperty()
  @IsBoolean()
  readonly empleado: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly CIIU: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly mail: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly municipio: string;
}
