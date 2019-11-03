import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{GuitarsService} from '../DAL/guitars.service';

@Component({
  selector: 'app-yourorder',
  templateUrl: './yourorder.component.html',
  styleUrls: ['./yourorder.component.css']
})
export class YourorderComponent implements OnInit {
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
    delete(guitars){
      window.alert('Your product has been added to the cart!');
      this._guitar.addToCart(this.guitars);
    }
    addToCart(guitars){
      window.alert('Your product has been added to the cart!');
      this._guitar.addToCart(this.product);
    }
  }