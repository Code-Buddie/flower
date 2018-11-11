import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower-liquid',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">Flower Liquid Mosquito Repellant</p>
            <div class="content notification is-radiusless">
              <p><strong>A new exciting product from Kapi Ltd.</strong></p>
              <p>Designed for use in living areas and bedrooms, the liquid bottle
                screws into an electric heater unit and plugs in to a standard socket.</p>
              <p>Provides complete protection against mosquitoes using a latest
                generation insecticide that is very safe for use in the home. Fragrance free.</p>
              <p>Available in Starter Pack (electric heater unit plus 45ml refill bottle)
                and Refill Packs (45ml refill bottle).</p>
              <br>
              <p><strong>Packaging: </strong></p>
              <em>
                <p>12 x Starter Pack Units 24 x Refill Pack units</p>
              </em>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/flower-liquid.png" alt="">
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/2017%20Flower%20Liquid%20MSDS.pdf">
            <img src="../../../assets/icons/flower-liquid.jpg" alt="">
          </a>
          <app-side-downloads></app-side-downloads>
          </div>
      </div>
    </section>`,
    styles: [ `a img{height:50px;}`]
})
export class FlowerLiquidMosquitoRepellantComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
