import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MovieElem } from '../movieElem';
import { WatchMovieService } from '../watch-movie.service';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {

  watchMovieservice: WatchMovieService;
  router: Router;
  movie: MovieElem;

  constructor(@Inject(MAT_DIALOG_DATA) data: MovieElem, router: Router, watchMovieService: WatchMovieService) {
    this.movie = data;
    this.router=router;
    this.watchMovieservice=watchMovieService;
  }

  ngOnInit(): void {
  }

  send(): void {
    console.log("calling watchMovieService.sendData with movie = " + this.movie.name + "from movie-dialog-component");
    this.watchMovieservice.sendData(this.movie);
    this.router.navigate(["/watching"]);
  }

}

