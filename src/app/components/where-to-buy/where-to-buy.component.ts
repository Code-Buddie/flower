import { Component, OnInit } from '@angular/core';
import { CareersService } from '../../services/careers.service';

@Component({
  selector: 'app-where-to-buy',
  templateUrl: './where-to-buy.component.html',
  styleUrls: ['./where-to-buy.component.css']
})
export class WhereToBuyComponent implements OnInit {
  salesPeople: any;

  constructor( public careersService: CareersService) { }

  ngOnInit() {
    this.salesPeople = this.careersService.getSalesPeople();
  }

}
