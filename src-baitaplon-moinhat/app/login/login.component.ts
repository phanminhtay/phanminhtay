import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username =null;
	password =null;
	//dang nhap
	showCheckall: boolean = false;
	showCheck: boolean = false;
	showCheck1: boolean = false;
	showCheckpass: boolean = false;
	//dang ký
	showChecksu1: boolean = false;
	showChecksu2: boolean = false;
	showChecksu3: boolean = false;
	showChecksu4: boolean = false;
	constructor(private _homepage: QuizService, private http: HttpClient, private router: Router) { }
	configUrl='https://cuong-dev1-api.herokuapp.com/studentsTwo';
	Students: any;
	getConfig() {
	  return this.http.get(this.configUrl);
	}
	ngOnInit() {
		this.getConfig().subscribe(data => {
			this.Students = data
			console.log(data)
		  })
	}
	// check() {
	// 	let ga = false;
	// 	this.Students.forEach(element => {
	// 		if (element.username == this.username && element.password == this.password) {
	// 			alert('dang nhap thanh cong')
	// 			ga == true;
	// 			this.router.navigate(['header'])
	// 		}
	// 	});
	// 	if (ga == false) {
	// 		alert('password hoặc tài khoản không đúng')
	// 	}
	// }
	check() {

		this.Students.forEach(element => {
		
		  if (this.username == null && this.password == null )                                  
		  { 
			return this.showCheckall=true; 
		  } 
		  if (this.password == null )                                  
		  { 
			this.showCheckpass=true;
			return this.showCheckall=false; 
		  } 
		  if (element.username == this.username && element.password == this.password) {
			this.router.navigate(["/header"])
			alert('Wellcome '+ element.fullname)
			return true;
		  }
		  if (element.username == this.username && this.password != element.password) {
			this.showCheck1=true;
			return this.showCheck=false;
		  }
		  if (element.username != this.username && this.password != element.password) {
			return this.showCheck=true;
		  }
		  if (element.username != this.username && this.password=="") {
			this.showCheckall=false;
			this.showCheckpass=false;
			return this.showCheck=true;
		  }
		 
		});
		// if (this.username == null) {
		//   return this.showCheck=true;
		// }
	  }
}
