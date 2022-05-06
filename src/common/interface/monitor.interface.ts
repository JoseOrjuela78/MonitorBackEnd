export interface IMonitor {
  tipoSolicitud: number;
  cupoCredito: number;
  cupoSolicitado: number;
  cupoAprobado: number;
  fechaPagare: Date;
  fechaFirmaPagare: Date;
  comentarios: string;
  Listas: boolean;
  Buro: boolean;
  BuroInterno: boolean;
  estado: number;
  causal: number;
  cuenta: string;
}
