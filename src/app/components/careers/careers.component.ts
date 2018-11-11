import { Component, OnInit } from '@angular/core';
import { CareersService } from '../../services/careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  careers: any;

  constructor( private careersService: CareersService ) { }

  ngOnInit() {
    this.careers = this.careersService.getAllCareers();
  }

}
