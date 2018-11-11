import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  customCarousel: object[] = [];

  constructor() { }

  getCarousels() {
    return CAROUSELS;
  }

  buildCarousel(min, max) {
    for (let i = 0; i < CAROUSELS.length; i++) {
      const carouselItem = CAROUSELS[i];
      if (carouselItem.id >= min && carouselItem.id <= max ) {
        this.customCarousel.push(carouselItem);
      }
    }

    return this.customCarousel;
  }
}

const CAROUSELS = [
  {
    id: 2,
    link: 'asset-2'
  },
  {
    id: 3,
    link: 'asset-3'
  },
  {
    id: 4,
    link: 'asset-4'
  },
  {
    id: 5,
    link: 'asset-5'
  },
  {
    id: 6,
    link: 'asset-6'
  },
  {
    id: 7,
    link: 'asset-7'
  },
  {
    id: 8,
    link: 'asset-8'
  },
  {
    id: 9,
    link: 'asset-9'
  },
  {
    id: 10,
    link: 'asset-10'
  },
  {
    id: 11,
    link: 'asset-11'
  },
  {
    id: 12,
    link: 'asset-12'
  },
  {
    id: 13,
    link: 'asset-13'
  },
  {
    id: 14,
    link: 'asset-14'
  },
  {
    id: 15,
    link: 'asset-15'
  },
  {
    id: 16,
    link: 'asset-16'
  },
  {
    id: 17,
    link: 'asset-17'
  },
  {
    id: 18,
    link: 'asset-18'
  },
  {
    id: 19,
    link: 'asset-19'
  },
  {
    id: 20,
    link: 'asset-20'
  },
  {
    id: 21,
    link: 'asset-21'
  }
];
