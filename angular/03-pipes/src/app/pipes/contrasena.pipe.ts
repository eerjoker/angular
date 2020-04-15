import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activado: boolean): string {

    // usando condicional ternario y el repeat del ES6
    // condición ? si es true : si es false
    return ( activado ) ? '*'.repeat( value.length ) : value;

    // mi forma
    /*
    if (activado){
      let cant: number = value.length;
      let censored: string = ''
      for ( let i: number = 0; i < cant; i++ ){
        censored = censored + '*';
      }
      return censored;
    } else {
      return value;
    }
    */
  }

}
