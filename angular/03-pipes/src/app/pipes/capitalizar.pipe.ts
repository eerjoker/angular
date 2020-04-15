import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {

    value = value.toLowerCase();

    // separo cada palabra
    let nombres = value.split(' ');

    if( todas ) {
      nombres = nombres.map( nombre => {
        // a cada palabra le concateno la primer letra capitalizada con el resto del string
        return nombre[0].toUpperCase() + nombre.substr(1);
      })
    } else {
      // capitalizo la primer posición de la primer palabra y le concateno el resto de la palabra
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    // vuelvo a unir cada palabra
    return nombres.join(' ');

  }

}
