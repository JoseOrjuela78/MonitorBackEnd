import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';
export class MonitorDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly tipoSolicitud: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly cupoCredito: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly cupoSolicitado: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly cupoAprobado: number;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fechaPagare: Date;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fechaFirmaPagare: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly comentarios: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly Listas: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly Buro: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly BuroInterno: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly estado: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly causal: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly cuenta: string;
}
