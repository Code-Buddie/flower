import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pali-wp',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">PALI 50 WP</p>
            <div class="content notification is-radiusless">
              <p><strong>Indoor Residual insecticide</strong></p>
              <p>A wonderful insecticide that gives you protection in your home from
                mosquitoes, bed bugs, cockroaches and a wide range of other insects.</p>
              <p>Because PALI 50 WP is a residual insecticide it provides lasting protection
                for 4-6 months after each application.</p>
              <p>PALI 50 WP uses Deltamethrin as its active ingredient, which is recommended
                by the World Health Organisation (W.H.O.) for indoor residual spraying.</p>
              <p><strong>Easy to use.</strong></p>
              <p>Follow the simple to use instructions on the pack</p>
            </div>
            <div class="content has-text-centered is-radiusless">
              <img src="../../../assets/products/cancel.png" alt="">
            </div>
            <div class="content notification is-radiusless">
              <p><strong>PALI 50 WP 20g sachet</strong></p>
              <p>Affordable and suitable for small homes and to treat bed bugs.
                Available in all top supermarkets, chemists and agrovets.</p>
              <br>
              <p><strong>Packaging:</strong></p>
              <p>10 x 20g sachets</p>
              <div class="content has-text-centered is-radiusless">
                <img src="../../../assets/products/pali-50-20.png" alt="">
              </div>
            </div>
            <div class="content notification is-radiusless">
              <p><strong>PALI 50 WP 100g sachet</strong></p>
              <p>Ideal for larger homes or more concentrated applications, schools, offices,
                hotels and any other place requiring protection from mosquitoes, bed bugs,
                cockroaches and a wide range of other insects.</p>
              <p>Available in all good chemists and agrovets.</p>
              <br>
              <p><strong>Packaging:</strong></p>
              <em>
                <p>10 x 100g sachets</p>
                <p>12 x 1OOg sachets (display carton)</p>
              </em>
              <div class="content has-text-centered is-radiusless">
                <img src="../../../assets/products/pali-50-100.png" alt="">
              </div>
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/pali%2050%20wp%20msds.pdf">
          <img src="../../../assets/icons/PALI%2050%20WP%20ICON.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class PaliWpResidueInsecticideComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
