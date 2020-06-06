import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {}

  transform( value: string ): any {

    // queda personalizado el domseguro para la spotiapp
    const url = 'https://open.spotify.com/embed/track/';

    // le indicamos que confíe en el resource del url, el return es de tipo SafeResourceUrl
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );

  }

}
