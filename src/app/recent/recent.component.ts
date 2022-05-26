import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';
import { GetRecentMoviesService } from '../get-recent-movies.service';
import { MovieElem } from '../movieElem';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component'; 



 
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})

export class RecentComponent implements OnInit {

  getRecentMoviesService: GetRecentMoviesService;

  length: number = 0;
  pageSize: number = 3;  //displaying three cards each row
  pageSizeOptions: number[] = [3, 6, 9, 12];

  productsList: MovieElem[]= [];
  pagedList: MovieElem[]= [];

  breakpoint: number = 3;  //to adjust to screen

  displayedColumns: string[] = ['id', 'name', 'url', 'year'];

  constructor(getRecentMoviesService: GetRecentMoviesService) {
    this.getRecentMoviesService = getRecentMoviesService;
  }

  ngOnInit(): void {
        this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
        this.productsList = this.getRecentMoviesService.getRecentMovies();
        this.pagedList = this.productsList.slice(0, 3);
        this.length = this.productsList.length;
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  onResize(event: any) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

}
