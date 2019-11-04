import { Component } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage:string;

  constructor(private sportifyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.sportifyService.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
    }, (error) => {
      this.error = true;
      this.errorMessage = error.error.error.message;
      this.loading = false;
    });

    this.loading = false;
  }
}
