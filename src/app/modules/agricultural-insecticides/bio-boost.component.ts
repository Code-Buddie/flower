import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bio-boost',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-dark is-bold"><p class="subtitle">Bio Boost</p>
            <div class="content notification is-radiusless">
              <p><strong>Organic foliar feed</strong></p>
              <p><strong>Highly effective and suitable for use on all crops</strong></p>
              <p>It is an organic foliar feed for use on vegetables and fruits.
              Formulated with salicylic acid and croton oil.</p>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/bio-boost.png" alt="">
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/Bio-Boost%20MSDS.pdf">
          <img src="../../../assets/icons/Bio%20Boost.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
    styles: [ `a img{height:50px;}`]
})
export class BioBoostComponent implements OnInit {

  constructor(private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });

  }

  ngOnInit() {
  }
}
