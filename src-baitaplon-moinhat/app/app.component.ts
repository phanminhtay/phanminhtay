import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baitapcuoiky';
}
 var D = new Date();
 document.title = "Bây giờ là: " + D.getHours()+" giờ "+ D.getMinutes()+ " phút.";