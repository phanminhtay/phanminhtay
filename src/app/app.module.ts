import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DangkyComponent } from './dangky/dangky.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { TraloicauhoiComponent } from './traloicauhoi/traloicauhoi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DangkyComponent,
    LienheComponent,
    GioithieuComponent,
    HoidapComponent,
    TraloicauhoiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ 
      { path: '', 	component: HeaderComponent },
      {path: 'login', component:LoginComponent},
      {path: 'dangky', component:DangkyComponent},
      {path: 'lienhe', component:LienheComponent},
      {path: 'gioithieu', component:GioithieuComponent},
      {path: 'hoidap', component:HoidapComponent},
      {path: 'traloicauhoi', component:TraloicauhoiComponent},
      // { path: 'products/:productId', component: ProductdetailComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]) 
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
