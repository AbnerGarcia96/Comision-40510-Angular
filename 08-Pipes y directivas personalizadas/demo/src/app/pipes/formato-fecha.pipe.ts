import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(fecha: Date): string {
    let resultado: string;

    resultado = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} a las ${fecha.getHours()}:${fecha.getMinutes()}` //dd/MM/YYYY a las HH:mm

    return resultado;
  }

}
