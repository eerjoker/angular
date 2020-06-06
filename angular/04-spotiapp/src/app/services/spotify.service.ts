import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    // creo headers para enviar el access token (válido por una hora)
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQABPgRHaZAy6zonMVoDMLJmHEWlnfIf2KKuB9vj23zl5HdGRYAYMFBg55ZepTItEmBVxeLuTXr27Pkd-6E'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    // llama a la petición get para obtener los nuevos lanzamientos, con ?limit=x al url puedo limitar la cantidad
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items ));
               // con ['albums'] indico que busque una propiedad llamada albums en data
  }

  getArtists( term: string ) {

    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items ));
  }

  getArtist( id: string ) {

    return this.getQuery(`artists/${ id }`);
              // no es necesario el pipe map porque la información ya viene como la necesito
               // .pipe( map( data => data['artists'].items ));
  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe( map( data => data['tracks'] ));
  }
}
