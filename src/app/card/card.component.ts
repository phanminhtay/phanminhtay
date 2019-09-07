import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pageTitle = "Danh sach san pham";
  isshow = true;
  lisproducts = [ 
    {
    "productId": "pd100",
    "productName": "Laptop",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imagesUrl": "laptop.jpg",
     // code data >> hien thi o tang giam bang 0
    "soluong":0,
    // them idcard chia san pham ra lam moi loai khac nhau
    "Idcart":1
  },
  {
    "productId": "pd101",
    "productName": "Điện thoại",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imagesUrl": "dienthoai.jpg",
    "soluong":0,
    "Idcart":2
  },
  {
    "productId": "pd102",
    "productName": "Tivi",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imagesUrl": "tivi.jpg",
    "soluong":0,
    "Idcart":3
  }, {
    "productId": "pd103",
    "productName": "Headphone",
    "productCode": "TBX-0022",
    "releaseDate": "May 15, 2016",
    "description": "15-inch steel blade hand saw",
    "price": 11.55,
    "starRating": 3.7,
    "imagesUrl": "tainghe.png",
    "soluong":0,
    "Idcart":4
    }
  ]
  // code cho ra tong toan san pham
  sum(){    
      let s = 0;
      this.lisproducts.forEach(function (item) {
        s = s + item.price * item.soluong
      })
      return s;
  }
  tang(Idcart){ 
      for (let i = 0; i < this.lisproducts.length; i++) {
        if (this.lisproducts[i].Idcart == Idcart) {
          this.lisproducts[i].soluong++;
        }
      }
  }
  giam(Idcart){ 
    for (let i = 0; i < this.lisproducts.length; i++) {
      if (this.lisproducts[i].Idcart == Idcart && this.lisproducts[i].soluong > 0) {
        this.lisproducts[i].soluong--;
      }
    }
}
 
}
