import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    this.loadingArtist = true;

    // capto cualquier cambio que tengan los parametros por el url y me quedo con el id del artista
    this.router.params.subscribe( params => {

      this.getArtist( params['id'] );
      this.getTopTracks( params['id']);

    });

  }

  getArtist( id: string ){
    this.loadingArtist = true;
    this.spotify.getArtist( id )
          .subscribe(artist => {
            this.artist = artist
            this.loadingArtist = false;
          });

  }

  getTopTracks( id: string ){

    this.spotify.getTopTracks( id )
          .subscribe( topTracks => {
            this.topTracks = topTracks;
          });

  }

}
