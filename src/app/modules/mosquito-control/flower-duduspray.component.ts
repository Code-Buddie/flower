import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flower-duduspray',
  // tslint:disable-next-line:max-line-length
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">DUDUSPRAY</p>
            <div class="content notification is-radiusless">
              <p>NATURAL INSECT SPRAY (for the home & garden).</p>
              <p>Kenya's best and most natural insect spray. Better and safer than
                any of the insect aerosols on the market.</p>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/duduspary.png" alt="">
            </div>
            <div class="content notification is-radiusless">
              <p>Designed for use in the home. Safe to use in the kitchen (on work
                surfaces and as a general spray for ants & cockroaches) and in bedrooms
                and on mosquito nets (to protect against mosquitoes).</p>
              <p>With a pleasing, gentle fragrance this natural pyrethrum product
                is an excellent insecticide that is safe to use around the house.</p>
              <p>Available in 500g and I litre re-useable trigger spray bottles and
                2 litre, 5 litre and 20 litre refill bottles.</p>
              <br>
              <p><strong>Packaging:</strong></p>
              <em>
                <p>12 x 500g trigger bottles</p>
                <p>12 x 1 litre trigger bottles</p>
                <p>6 x 2 litre refill bottles</p>
                <p>1 x 5 litre refill bottle</p>
                <p>1 x 20 litre refill drum</p>
              </em>
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/HOME%20AND%20GARDEN%20DUDU%20SPRAY%20MSDS.pdf">
        <img src="../../../assets/icons/FLOWER%20DUDUSPRAY%20ICON.jpg" alt="">
      </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class FlowerDudusprayComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
