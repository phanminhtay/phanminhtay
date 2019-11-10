import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {sheader} from './header/headers';
import {Student} from './login/student';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
//dg dan lay ten mon học
  url = '/assets/db/Subjects.json';
urlstudent ='/assets/db/Students.json';

  constructor(private http:HttpClient) { }

  getAllSubjects(): Observable<sheader[]> {
    return this.http.get<sheader[]>(this.url);
  }
  getListUsers(): Observable<Student[]> {
		return this.http.get<Student[]>(this.urlstudent)
	};
  //get data json of detail subject
  getAlldetailSubject(Id: string) {
    return this.http.get(`/assets/db/` + Id + `.json`);
  }
}
