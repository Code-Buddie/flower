import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flower-dust',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">Flower Dust</p>
            <div class="content notification is-radiusless">
              <p>This is a derivative of the pyrethrum flowers after the extraction of the
                pyrethrins and when added to the soil it acts as organic matter to the soil,
                improves the soil structure.</p>
              <p>Due to its smell, it also works as a fumigant to the soil exisiting or
                pest stages found in the soil like pupal stages of thrips.</p>
              <p>It is packed in a 50Kg bag.</p>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/flower-dust.png" alt="">
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/2017%20FLOWER%20DUST%20Rev%20MSDS.pdf">
          <img src="../../../assets/icons/flower%20dust.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class FlowerDustComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
