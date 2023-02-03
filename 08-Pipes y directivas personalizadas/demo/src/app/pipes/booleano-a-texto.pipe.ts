import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoATexto'
})
export class BooleanoATextoPipe implements PipeTransform {

  transform(valorBooleano: boolean, ...args: any[]): string {
    return valorBooleano ? args[0] : args[1];
  }

}
