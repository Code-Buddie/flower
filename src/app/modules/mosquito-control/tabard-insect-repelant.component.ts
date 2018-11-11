import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabard-repelant',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">TABARD INSECT REPELLENT</p>
            <div class="content notification is-radiusless">
              <p>Tabard Insect Repellents have been protecting people from mosquitoes and other insects
                for over 50 years.</p>
                <p>Tabard is recommended by the World Health Organisation (W.H.O.) for use by people in
                  malarial areas.</p>
                <p>Tabard lotions and aerosols are now available in Kenya, distributed exclusively by Kapi Limited </p>
            </div>
            <div class="content notification is-radiusless">
              <p><strong>Tabard Aerosols</strong></p>
              <p>With DEET as the active ingredient, these aerosols are
                designed for use by spraying onto exposed skin to protect
                you from mosquitoes and other insects for up to 8 hours.</p>
              <p>Available in 70g and 150g sizes.</p>
              <div class="columns">
              <div class="column">
              <p><strong>Packaging:</strong></p>
              <em>
                <p>12 x 70g aerosol</p>
                <p>12 x 150g aerosol</p>
              </em>
              </div>
              <div class="content has-text-centered is-radiusless">
                <img src="../../../assets/products/tabard-aerosol.png" alt="">
              </div>
              </div>
            </div>
            <div class="content notification is-radiusless">
              <p><strong>Tabard Lotions</strong></p>
              <p>A lotion with DEET to provide complete protection from
                mosquitoes and other insects for up to 8 hours. </p>
              <p>Apply to exposed skin.</p>
              <p>Available in 50m1 and 150m1 sizes.</p>
              <div class="columns">
              <div class="column">
              <p><strong>Packaging:</strong></p>
              <em>
                <p>20 x 50ml bottles</p>
                <p>20 x 150ml bottles</p>
              </em>
              </div>
              <div class="content has-text-centered is-radiusless">
                <img src="../../../assets/products/tabard-lotion.png" alt="">
              </div>
              </div>
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/2017%20Tabard%20Aerosol%20Insect%20Repellant%20MSDS.pdf">
          <img src="../../../assets/icons/tabard%20aerosol%20icon.jpg" alt="">
        </a>
        <a href="../../../assets/downloads/2017%20Tabard%20Lotion%20MSDS.pdf">
          <img src="../../../assets/icons/tabard%20lotion%20icon.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class TabardInsectRepelantComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
