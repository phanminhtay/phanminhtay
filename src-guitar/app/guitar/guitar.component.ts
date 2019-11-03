import { Component, OnInit } from '@angular/core';
import {GuitarsService} from '../DAL/guitars.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
  lists: any;
  guitar: any;
  guitars : any ;
  listguitar: any;
  features;
  cid:number;
 //guitars :any=[];
  sguitar:any;
  
  constructor(private _guitar:GuitarsService, private route:ActivatedRoute) { }

  ngOnInit() {
this.LoadData();

}


LoadData(){
  this.route.paramMap.subscribe(para =>{
    this.cid=+para.get('cid');
  });
  if(this.cid !=0 ){
    this._guitar.getAllguitar().subscribe(data=>{
      this.guitars=data;
      this.guitars=this.guitar.filter(p=>p.id==this.cid);
    });
  }
   else{
     this._guitar.getAllguitar().subscribe(data=>{
       this.guitars=data;
     });
   }
   this._guitar.getAllcategories().subscribe(data=>{
    this.lists=data
  });
  
}
}
