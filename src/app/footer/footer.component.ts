import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 year: any;
 date: Date = new Date();

constructor( public router: Router
) { }

ngOnInit() {
  this.year = this.date.getFullYear();
}

}


  // https://api.africastalking.com/restless/send?
 /*  username=makali
  &Apikey=b4aff5973ed4a0cdbeaf7a8fdbb7cb23266db08b3dbd66ed9ac57a5814fdfca8
  &to=+254707076869
  &message=We%20love%20code */
