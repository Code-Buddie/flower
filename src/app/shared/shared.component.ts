import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../services/modules.service';
import { CarouselService } from '../services/carousel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  modules: any;
  carousels: any;
  carouselItems: any[];
  address: string;
  linkElements: any;

  constructor(
    private modulesService: ModulesService,
    private carouselService: CarouselService
  ) { }

  ngOnInit() {
    this.modules = this.modulesService.getModules();
    this.carouselBuilder();
    // @ts-ignore
    this.carousels = bulmaCarousel.attach();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {

    this.linkElements = document.getElementsByClassName('last-route');
    for (let i = 0; i < this.linkElements.length; i++) {
      const linkElement = this.linkElements[i];
      linkElement.addEventListener('click', () => {
          window.location = linkElement.href;
      });
    }
  }

  carouselBuilder() {
    this.address = window.location.pathname;
    if (this.address.includes('mosquito')) {
      this.carouselItems = this.carouselService.buildCarousel(1, 6);
    } else if (this.address.includes('pet')) {
      this.carouselItems = this.carouselService.buildCarousel(7, 12);
    } else if (this.address.includes('public')) {
      this.carouselItems = this.carouselService.buildCarousel(13, 15);
    } else if (this.address.includes('agricultural')) {
      this.carouselItems = this.carouselService.buildCarousel(14, 16);
    } else if (this.address.includes('application')) {
      this.carouselItems = this.carouselService.buildCarousel(17, 21);
    } else {
      this.carouselItems = this.carouselService.getCarousels();
    }
  }
}
