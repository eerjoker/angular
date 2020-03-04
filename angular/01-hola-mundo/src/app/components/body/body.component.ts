import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  // *ngIf trabaja con expresiones que den true o false.
  mostrar = true; // es modificado por el evento (click) del botón, el valor lo toma el *ngIf

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  };

  // *ngFor trabaja en base a arreglos
  // se usa en html declarando una variable con "let" y se indica que le sigue el arreglo con "for".
  // se puede agregar código con ; y definiendo una nueva variable.
  personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

}
