import { Component, OnInit } from '@angular/core';
import {GuitarsService} from '../DAL/guitars.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-card-guitar',
  templateUrl: './card-guitar.component.html',
  styleUrls: ['./card-guitar.component.css']
})
export class CardGuitarComponent implements OnInit {
guitars:any;
product : any;
  listproduct : any;  
  features;
  constructor(private _guitar:GuitarsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.guitars=this._guitar.getItems();
    console.log(this.guitars);
    const pid=+this.route.snapshot.paramMap.get('pid');
    this._guitar.getAllguitar().subscribe(p=>{
      this.listproduct=p;
      this.product=this.listproduct.find(x=>x.id==pid);
      this.features=this.product.newfeatures;
      console.log(this.features);
    })
  }
  addToCart(guitars){
    window.alert('Bạn muốn mua sản phẩm này');
    this._guitar.addToCart(this.product);
  }
  tang(ID) {
    for (let i = 0; i < this.guitars.length; i++) {
      if (this.guitars[i].idsoluong == ID) {
        this.guitars[i].soluong++;
      }
    }
  }
  giam(ID) {
    for (let i = 0; i < this.guitars.length; i++) {
      if (this.guitars[i].idsoluong == ID && this.guitars[i].soluong > 0) {
        this.guitars[i].soluong--;
      }
    }
  }
  xoa(id){
    var a = confirm ('Bạn có chắc muốn xóa sản phẩm Không');
    if ( a == true){
      const index= this.guitars.findIndex( word => word.Id === id);
      this.guitars.splice(index , 1);
    } else {
      return false;
    }
  }
  tong() {
    let s = 0;
    this.guitars.forEach(function (item) {
      s = s + item.price * item.soluong
    })
    return s;
  }
}
