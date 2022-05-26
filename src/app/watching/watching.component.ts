import { Component, OnInit, Input } from '@angular/core';
import { MovieElem } from '../movieElem';
import { WatchMovieService } from '../watch-movie.service';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.css']
})
export class WatchingComponent implements OnInit {

  movie: MovieElem;

  constructor(watchMovieService: WatchMovieService) {
    this.movie = watchMovieService.getData()
  }

  ngOnInit(): void {
  }

}
