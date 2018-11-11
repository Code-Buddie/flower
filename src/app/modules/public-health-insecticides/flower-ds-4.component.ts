import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flower-ds-4',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold">
            <p class="subtitle">FLOWER DS 4% PUBLIC HEALTH INSECTICIDE</p>
            <div class="content notification is-radiusless">
              <p>A natural pyrethrum insecticide for public health use.
                Flower DS 4% has 4% pyrethrum and 16% piperonyl butoxide.</p>
              <p>Flower DS 4% is a water based concentrate in emulsion form
                that needs to be diluted with water prior to application. The label gives dilution rates.</p>
              <p>Ideal for use in the following areas: </p>
              <ul>
                <li>Commercial kitchens</li>
                <li>Dormitories of boarding schools</li>
                <li>Hospitals</li>
                <li>Old peoples homes</li>
                <li>Hotels</li>
                <li>Office blocks</li>
              </ul>
              <p>Flower DS 4% may be used in all 'sensitive areas' as shown above. Its active is pyrethrum
                which has very low mammalian toxicity. It is a very broad spectrum
                insecticide, meaning that it kills most insects.</p>
              <strong>Flower DS 4% should only be used by professional pest control companies. </strong>
              <p>Available in 250ml, 500ml, 2 litre and 5 litre bottles</p>
              <p>Flower DS 4% is available in I litre, 2 litres, 5 litres and 20 litres</p>
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/flower%20ds%204%20wv%20100%20natural1-3.pdf">
          <img src="../../../assets/icons/flower%20ds%204%20ec%20con.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class FlowerDSComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
