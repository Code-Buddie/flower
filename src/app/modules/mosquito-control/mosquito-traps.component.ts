import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mosquito-traps',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">Electric Mosquito Traps</p>
            <div class="content notification is-radiusless">
              <p>Simple to use</p>
              <p>Plug in and turn on</p>
              <p>No chemicals</p>
              <p>safe for use in living areas and bedrooms</p>
              <p>Available in all Naivas and Chandarana stores</p>
              <p><strong>Packaging:</strong></p>
              <em>
                <p>8 x Mosquito trap boxes</p>
              </em>
            </div>
            <div class="content has-text-centered is-radiusless">
              <img src="../../../assets/products/traps.png" alt="">
            </div>
          </article>
        </div>
        <div class="column">
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class MosquitoTrapsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
