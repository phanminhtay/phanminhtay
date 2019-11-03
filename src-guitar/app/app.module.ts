import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { GuitarComponent } from './guitar/guitar.component';
import { DetailguitarComponent } from './detailguitar/detailguitar.component';
import { CardGuitarComponent } from './card-guitar/card-guitar.component';
import { YourorderComponent } from './yourorder/yourorder.component';

@NgModule({
  declarations: [
    AppComponent,
    GuitarComponent,
    DetailguitarComponent,
    CardGuitarComponent,
    YourorderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GuitarComponent },
      { path: 'home', component: GuitarComponent },
      { path: 'home/:cid', component: GuitarComponent },
      { path: 'detail/:pid', component: DetailguitarComponent },
      { path: 'yourcart', component: CardGuitarComponent },
      { path: 'yourorder', component: YourorderComponent },     
      // { path: 'list-product/:productId', component: ProductdetailComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
