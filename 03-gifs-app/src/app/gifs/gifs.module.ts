import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifCardListComponent } from './components/gif-card-list/gif-card-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, GifCardListComponent, CardComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent, SearchBoxComponent, GifCardListComponent, CardComponent],
})
export class GifsModule {}