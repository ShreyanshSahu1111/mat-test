import { Injectable } from '@angular/core';
import { MovieElem } from './movieElem';


const ELEMENT_DATA: MovieElem[] = [
  {id: 1, name: 'Wanda Vision', thumbnailUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/wandavision.mp_240x360_crop_center.progressive.jpg?v=1614371756", videoUrl: "xyz1",year: 2001, description:"Release Date: January 15, 2021. Marvel Studios' “WandaVision” blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff (Elizabeth Olsen) and Vision (Paul Bettany)—two super-powered beings living their ideal suburban lives—begin to suspect that everything is not as it seems", genre: ['Action', 'Comedy', 'Sci-fi'] },
  {id: 2, name: 'Spider Man Far From Home', thumbnailUrl:"https://sm.ign.com/t/ign_in/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_epch.1080.jpg", videoUrl: "xyz2",year: 2019, description:"Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.", genre: ['Action', 'Sci-fi']},
  {id: 3, name: 'Black Panther', thumbnailUrl:"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg", videoUrl: "xyz3",year: 2018, description:"After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.", genre: ['Action', 'Adventure']},
  {id: 4, name: 'Baby Driver', thumbnailUrl:"https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg", videoUrl: "xyz4",year: 2017, description:"Doc forces Baby, a former getaway driver, to partake in a heist, threatening to hurt his girlfriend if he refuses. But the plan goes awry when their arms dealers turn out to be undercover officers.", genre: ['Action', 'Thriller']},
  {id: 5, name: 'Boron', thumbnailUrl:"https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500", videoUrl: "xyz5",year: 2001, description:"HelloWorld5", genre: ['Action', 'Comedy']},
  {id: 6, name: 'Carbon', thumbnailUrl:"https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543", videoUrl: "xyz6",year: 2001, description:"HelloWorld6", genre: ['Action', 'Comedy']},
  {id: 7, name: 'Nitrogen', thumbnailUrl:"thumbUrl7", videoUrl: "xyz7",year: 2001, description:"HelloWorld7", genre: ['Action', 'Comedy']},
  {id: 8, name: 'Oxygen', thumbnailUrl:"thumbUrl8", videoUrl: "xyz8",year: 2001, description:"HelloWorld8", genre: ['Action', 'Comedy']},
  {id: 9, name: 'Fluorine', thumbnailUrl:"thumbUrl9", videoUrl: "xyz9",year: 2001, description:"HelloWorld9", genre: ['Action', 'Comedy']},
  {id: 10, name: 'Neon', thumbnailUrl:"thumbUrl10", videoUrl: "xyz10",year: 2001, description:"HelloWorld10", genre: ['Action', 'Comedy']},
];

@Injectable({
  providedIn: 'root'
})
export class GetRecentMoviesService {

  // recentMovies: MovieElem[] =[];
  
  constructor() { }

  getRecentMovies() {
    // to be received from spring
    return ELEMENT_DATA;
  }
}
