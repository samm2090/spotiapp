import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks:any[] = [];

  loading: boolean;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {
    this.route.params.subscribe((param: any) => {
      this.getArtist(param.id);
      this.getTopTrack(param.id);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.artist = this.spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTrack(id: string) {
    this.spotifyService.getTopTrack(id).subscribe(topTracks => {
      this.topTracks = topTracks;
    });
  }

}
