import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-knapsack-sprayers',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">Knapsack Sprayers</p>
            <div class="content notification is-radiusless">
              <p><strong>Flower Value 16-litre KnapSack</strong></p>
              <p>A range of good quality affordable trigger bottles and knapsacks.</p>
              <hr>
              <p><strong>16 litre Knapsack Sprayer</strong></p>
              <p>good qualiy and durable</p>
              <p>An ideal affordable knapsack sprayer</p>
              <p><strong>Packaging:</strong></p>
              <p><em>1 x 16lt knapsack sprayer</em></p>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/knapsack.png" alt="">
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
export class KnapsackSprayersComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
