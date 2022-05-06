import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class FiltroDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly grupo: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly valor: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly parametros: string;
  @ApiProperty()
  @IsBoolean()
  readonly activo: boolean;
}
