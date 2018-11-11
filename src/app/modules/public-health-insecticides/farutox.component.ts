import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-farutox-8',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold">
            <p class="subtitle">FARUTOX 8/64 </p>
            <div class="content notification is-radiusless">
              <p>A natural pyrethrum insecticide for public health use.
                Farutox 8/64 has 8% pyrethrum and 64% piperonyl butoxide.</p>
              <p>Farutox 8/64 is an oil based insecticide for dilution with oils prior to application</p>
              <p>Ideal for use in the following areas: </p>
              <ul>
                <li>Food storage facilities</li>
                <li>Grain storage facilities</li>
                <li>Food preparation areas</li>
                <li>Commercial kitchens</li>
                <li>Corridors</li>
                <li>Public areas</li>
              </ul>
              <p>As it is an oil based spray, we do not recommend its use in hotel bedrooms
                (use Flower DS 4% which is water based).</p>
              <p>Farutox 8/64 is supplied as a concentrate or is also available diluted and ready to use.</p>
              <p>Concentrate: Available in 250m1, I litre, 5 litres and 20 litres</p>
              <p>Ready To Use: Available in 5 litres or 20 litres </p>
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/FARUTOX%20864%20MSDS.pdf">
          <img src="../../../assets/icons/Farutox%20864%20ICON.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class FarutoxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
