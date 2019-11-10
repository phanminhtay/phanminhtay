import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service'

@Component({
  selector: 'app-traloicauhoi',
  templateUrl: './traloicauhoi.component.html',
  styleUrls: ['./traloicauhoi.component.css']
})
export class TraloicauhoiComponent implements OnInit {

  //code huy
  public quiz: any;
  Subject: any;
  itemperpage: number = 1;
  curpage: number = 1;
  totalPage:number;
  // next(){
  //   this.totalPage=Math.ceil(this.quiz.length/this.itemperpage);
  //   if(this.curpage < this.totalPage)
  //     this.curpage++
  // }
  // Previous(){
  //   if( this.totalPage*this.curpage)
  //     this.curpage--
  // }
  // LastPege(){
  //   this.curpage=this.totalPage
  // }
  // top(){
  //   this.curpage=1
  // }

  constructor(private route: ActivatedRoute, private quizs: QuizService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      const Id = para.get('mid');
      this.quizs.getAlldetailSubject(Id).subscribe(data => this.quiz = data)
      this.dongho()
    });

  }
  dongho() {
		var minute = 30;
		var second = 0;

		var clear = setInterval(function() {
			if (minute == 0 && second == 0) {
				console.log(this.outOfTime)
				document.getElementById('dongho').style.display = 'none'
				clearInterval(clear);
				alert('Het gio lam bai');
			}
			else {
				second -= 1
				if (second < 0) {
					minute -= 1;
					second = 59;
				}
				document.getElementById('dongho').innerHTML = minute + 'P : ' + second + 's';
			}
		}, 1000)
  }
  //đếm câu hỏi
  socauhoi(){
    return this.quiz.length;
  }
}
