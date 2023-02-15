import { Curso } from "../models/curso";

export const cursos = {
    obtenerCursos: () => {
        return [
            {
              nombre: 'Angular - utilizando UseValue', 
              comision: '49533', 
              profesor: {
                nombre: 'Abner',
                correo: 'abner@gmail.com',
                fechaRegistro: new Date(2022, 2, 15)
              },
              fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
              fechaFin: new Date(2023, 0, 31, 20, 30, 0),
              inscripcionAbierta: true
            },
            {
              nombre: 'Vue - utilizando UseValue', 
              comision: '42523', 
              profesor: {
                nombre: 'Lucas',
                correo: 'lucas@gmail.com',
                fechaRegistro: new Date(2022, 2, 15)
              },
              fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
              fechaFin: new Date(2023, 1, 31, 20, 30, 0),
              inscripcionAbierta: false
            },
            {
              nombre: 'NodeJS - utilizando UseValue', 
              comision: '42433', 
              profesor: {
                nombre: 'Tristan',
                correo: 'tristan@gmail.com',
                fechaRegistro: new Date(2022, 2, 15)
              },
              fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
              fechaFin: new Date(2023, 2, 31, 20, 30, 0),
              inscripcionAbierta: true
            },
            {
              nombre: 'React - utilizando UseValue', 
              comision: '49536', 
              profesor: {
                nombre: 'Freddy',
                correo: 'freddy@gmail.com',
                fechaRegistro: new Date(2022, 2, 15)
              },
              fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
              fechaFin: new Date(2023, 3, 31, 20, 30, 0),
              inscripcionAbierta: false
            }
          ];
    },
    agregarCurso: (curso: Curso) => {
      console.log('Agregando curso desde curso.data.ts');
    }
}