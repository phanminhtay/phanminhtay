import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { MyUserComponent } from './my-user/my-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ListproductComponent,
    MyUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
