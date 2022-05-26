import { Component, OnInit, Input } from '@angular/core';
import { WatchMovieService } from '../watch-movie.service';
import { Router } from '@angular/router';
import { MovieElem } from '../movieElem';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() movie: MovieElem = { id: 0, name: "", thumbnailUrl: "", videoUrl: "", year: 0, description: "", genre: [] };

  watchMovieservice: WatchMovieService;
  router: Router;

  constructor(watchMovieService: WatchMovieService, router: Router, public dialog: MatDialog) {
    this.watchMovieservice = watchMovieService;
    this.router = router;
  }

  ngOnInit(): void {
  }

  send(): void {
    console.log("calling watchMovieService.sendData with movie = " + this.movie.name);
    this.watchMovieservice.sendData(this.movie);
    this.router.navigate(["/watching"]);
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: this.movie.id,
      name: this.movie.name,
      thumbnailUrl: this.movie.thumbnailUrl,
      videoUrl: this.movie.videoUrl,
      year: this.movie.year,
      description: this.movie.description,
      genre: this.movie.genre
    };

    dialogConfig.height = "600px";
    dialogConfig.width = "350px";

    this.dialog.open(MovieDialogComponent, dialogConfig);
  }

}
