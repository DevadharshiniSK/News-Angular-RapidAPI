import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { NewsComponent } from './news/news.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'',component:NewsComponent}, //home
  {path:'tech',component:TechnewsComponent}, //technews
  {path:'bitcoin',component:BitcoinComponent}, //bitcoinnews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
