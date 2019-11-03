import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GuitarsService {
  items:any=[];
  url='/assets/data/guitar.json';
  constructor(private http:HttpClient) { }
  getAllguitar(){
    return this.http.get('/assets/data/guitar.json')
  }
  // getAllguitars(id:number){
  //   return this.http.get('/assets/data/guitar.json'+id)
  // }
  getAllcategories(){
    return this.http.get('/assets/data/categories.json')
  }
  addToCart(guitars) {
    this.items.push(guitars);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
