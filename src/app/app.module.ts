import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
 import { MatDialogModule } from '@angular/material/dialog';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { HomeComponent } from './home/home.component';
import { RecentComponent } from './recent/recent.component';
import { SearchComponent } from './search/search.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { WatchingComponent } from './watching/watching.component';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentComponent,
    SearchComponent,
    ThumbnailComponent,
    WatchingComponent,
    MovieDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
