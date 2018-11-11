import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosquito-coils',
  template: `
  <section class="container">
  <div class="columns">
    <div class="column">
      <app-side-products></app-side-products>
    </div>
    <div class="column is-half">
      <article class="tile is-child is-light is-bold">
        <p class="subtitle">Mosquito Coils</p>
        <div class="content notification is-radiusless">
          KAPI Limited has been making Kenya's best mosquito coils for over 50
          years.<strong>All coils burn longer than 7 hours.</strong>
        </div>
        <div class="content notification is-radiusless">
            <p><strong>Flower coils</strong> are the deluxe coil and use a generous dose
            of insecticide to ensure a mosquito free environment.</p>
            <p>Sleep in peace throughout the night.</p>
            <p>Available in red colour with distinctive Flower Coil perfume. Packed
            in boxes of 10 coils with stand(36 boxes per carton) or
            individually packed double coilthat we sell as <strong>Moja kwa Moja</strong></p>
            <p><strong>Packaging:</strong></p>
            <em><p>36 * Flower Coil Boxes</p>
            <p>90 * individual Double Flower Coils</p></em>
        </div>
        <div class="content is-radiusless">
          <div class="columns has-text-centered">
            <div class="column">
              <img src="../../../assets/products/mosquito-coil.png" alt="">
            </div>
            <div class="column">
              <img src="../../../assets/products/mosquito-coils.png" alt="">
            </div>
          </div>
        </div>
        <div class="content notification is-radiusless">
            <p><strong>Combat coils</strong> are affordably priced and provide good
            protection against mosquitoes throughout the night. Available in red and green
            colours. Fragrance free.</p>
            <p>Packed 10 coils and stand per box</p>
            <p>36 boxes per carton</p>
            <p><strong>Packaging:</strong></p>
            <em><p>36 * Combat Coil Boxes</p></em>
          </div>
      </article>
    </div>
    <div class="column">
    <p class="subtitle">Downloads</p>
    <a href="../../../assets/downloads/Combat-w-w-D-allethrin-coils.pdf">
      <img src="../../../assets/icons/Combat%20Coils%20ICON.jpg" alt="">
    </a>
    <a href="../../../assets/downloads/Flower%20Mosquito%20coils%20MSDS.pdf">
      <img src="../../../assets/icons/Flower%20Coils%20ICON.jpg" alt="">
    </a>
      <app-side-downloads></app-side-downloads>
    </div>
  </div>
</section>`,
styles: [ `a img{height:50px;}`]
})
export class MosquitoCoilsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
