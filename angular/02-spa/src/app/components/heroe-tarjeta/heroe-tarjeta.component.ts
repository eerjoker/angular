import { Component, OnInit, Input, /*Output, EventEmitter*/ } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}; // Input indica que la propiedad héroe puede venir desde afuera
  @Input() index: number;

  // @Output() heroeSeleccionado: EventEmitter<number>; // Output indica que una función va a emitir hacia afuera información.

  constructor( private router:Router ) {
    // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
