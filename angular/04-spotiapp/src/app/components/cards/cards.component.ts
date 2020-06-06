import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  seeArtist( item: any ){

    let artistId: string;

    if ( item.type === 'artist' ) {

      artistId = item.id;

    } else {

      artistId = item.artists[0].id;

    }

    // como la ruta tiene un parametro, todo va entre [] donde se indica ruta y parametro
    this.router.navigate([ '/artist', artistId ]);

  }

}
