import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mosquito-repellant-towellete',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">MOSQUITO REPELLENT TOWELETTES</p>
            <div class="content notification is-radiusless">
              <p>Individual DEET impregnated towelettes ideal for applying to exposed skin to stop all mosquitoes and biting insects.</p>
              <p>Individually wrapped and sealed.</p>
              <p>We can supply ready printed 'Zebra' brand towelettes, or we can print your hotel or lodge logo.</p>
              <p>The ideal mosquito repellent to offer to your guests, combined with great branding.</p>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/towellete.png" alt="">
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/Mosquito%20Repellent%20Towlettes.pdf">
          <img src="../../../assets/icons/towellettes%20icon%20new.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class MosquitoRepellantToweletteComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
