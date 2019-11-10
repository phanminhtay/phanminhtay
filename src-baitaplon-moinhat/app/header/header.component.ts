import { Component, OnInit } from '@angular/core';
import {QuizService} from '../quiz.service';

import {sheader} from '../header/headers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
p:number =1;
  itempage:4;
  currpage:number=1;
  public Subjects:sheader[];
  Subject:any;
  pid;
  
  constructor(private quiz:QuizService) { }

  ngOnInit() {
    this.quiz.getAllSubjects().subscribe(data => this.Subjects = data);
    this.Subject= this.Subjects.find(p=>p.Id=== this.pid);
  }
}
