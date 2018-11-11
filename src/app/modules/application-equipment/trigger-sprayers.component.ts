import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trigger-sprayers',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">Trigger Sprayers</p>
            <div class="content notification is-radiusless">
              <p><strong>Italian Trigger Sprayers</strong></p>
              <p>Very high quality Italian trigger with empty bottles. Will last for years and years</p>
              <p>Available in 500ml and 1 litre bottles.</p>
              <hr>
              <p><strong>Packaging:</strong></p>
              <p><em>12 x 500ml trigger bottles</em></p>
              <p><em>12 x 1 litre trigger bottles</em></p>
            </div>
            <div class="content is-radiusless">
            <div class="columns has-text-centered">
              <div class="column">
                <img src="../../../assets/products/italian.png" alt="">
              </div>
              <div class="column">
                <img src="../../../assets/products/flower.png" alt="">
              </div>
              </div>
            </div>
            <div class="content notification is-radiusless">
              <p><strong>Flower Value Trigger</strong></p>
              <p>A range of good quality affordable trigger bottles and knapsacks.</p>
              <hr>
              <p><strong>Trigger Sprayers</strong></p>
              <p>A well selected range of affordable trigger sprayers available in
                1 litre, 1.5 litre and 2 litre sizes.</p>
              <p><strong>Packaging:</strong></p>
              <p><em>20 x 1 litre trigger bottles</em></p>
              <p><em>15 x 1.5 litre trigger bottles</em></p>
              <p><em>15 x 2 litre trigger bottles</em></p>
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class TriggerSprayersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
