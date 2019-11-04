import { Component } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any[] = [];
  loading:boolean;

  constructor(private spotifyService: SpotifyService) { }

  search(term: string) {
    this.loading = true;
    this.spotifyService.getArtists(term).subscribe((data: any) => {
      this.artists = data;
    })
    this.loading =false;
  }


}
