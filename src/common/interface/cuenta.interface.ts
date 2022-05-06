export interface ICuenta {
  fechaInicio: Date;
  tipoIdentificacion: number;
  numeroIdentificacion: string;
  razonSocial: string;
  fechaMatricula: Date;
  fechaNacimiento: Date;
  cliente: boolean;
  proveedor: boolean;
  empleado: boolean;
  CIIU: string;
  mail: string;
  municipio: string;
  //representantes: IRepresentante[];
}