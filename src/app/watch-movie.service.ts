import { Injectable } from '@angular/core';
import { MovieElem } from './movieElem';

@Injectable({
  providedIn: 'root'
})
export class WatchMovieService {

  constructor() { }
  movie: MovieElem={id:0, name:"", thumbnailUrl:"", videoUrl:"", year:0, description:"", genre:[]};
  sendData(movie: MovieElem){
    console.log('save data function called' + movie.name + this.movie.name);
    this.movie=movie; 
  }
  getData(): MovieElem{
    console.log('get data function called');
    return this.movie;
  }
}
