import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-traloicauhoi',
  templateUrl: './traloicauhoi.component.html',
  styleUrls: ['./traloicauhoi.component.css']
})
export class TraloicauhoiComponent implements OnInit {
  pid;
  product:any;
  cauhoi=[
    {
        "Id": 25106,
        "Text": "Có mấy loại Service?",
        "Marks": 1,
        "AnswerId": 104121,
        "Answers": [
            { "Id": 104118, "Text": "3" },
            { "Id": 104119, "Text": "4" },
            { "Id": 104120, "Text": "1" },
            { "Id": 104121, "Text": "2" }
        ]
    },{ "Id": 25109, "Text": "Phương thức Service.stopSelf(int startId) có tham số kiểu int. Tham số này dùng để làm gì?", "Marks": 1, "AnswerId": 104132, "Answers": [{ "Id": 104130, "Text": "Nếu startId khác 0, Service sẽ bị hủy một cách vô điều kiện" }, { "Id": 104131, "Text": "Tham số miêu tả số miliseconds bị trì hoãn trước khi Service bị hủy" }, { "Id": 104132, "Text": "Là start identifier gần nhất nhận được bởi lời gọi onStart(Intent, int)" }, { "Id": 104133, "Text": "Được sử dụng để dừng Service nếu Service đang chạy trong process id với process id bằng giá trị startid" }] 
  }]
constructor(private route:ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe(para=>{
    this.pid =+para.get('Id');
  });
  this.product= this.cauhoi.find(p=>p.Id===this.pid);
}

}
