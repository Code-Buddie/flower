import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anti-bacterial-range',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold">
            <p class="subtitle">Natural Anti-Bacterial Dog Shampoo</p>
            <div class="content notification is-radiusless">
              <p>Contains tea tree and lavender oils. Cleans your dog, leaving it smelling fresh and clean.</p>
              <p><strong>Please note: </strong>This shampoo does NOT control ticks, fleas or lice</p>
              <p>Available in 250ml, 500ml, 1 litre, 2 litre and 5 litre bottles</p>
              <p><strong>Packaging:</strong></p>
              <em>
                <p>24 x 250 ml bottles</p>
                <p>12 x 500 ml bottles</p>
                <p>24 x 500 ml bottles</p>
                <p>12 x 1 litre bottles</p>
                <p>18 x 1 litre bottles</p>
                <p>6 x 2 litre bottles</p>
                <p>1 x 5 litre bottles</p>
              </em>
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/Anti-Bacterial.pdf">
          <img src="../../../assets/icons/Anti-Bacterial.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class AntiBacterialRangeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
