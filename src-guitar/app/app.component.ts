import { Component } from '@angular/core';
import {GuitarsService} from './DAL/guitars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guitars';
  categories:any;
  constructor(private _guitar:GuitarsService){}
  ngOnInit(){
    this._guitar.getAllcategories().subscribe(cate =>{
      this.categories=cate;
    });
  }
}
