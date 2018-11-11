import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dudu-krin-original',
  template: `
  <section class="container">
  <div class="columns">
    <div class="column">
      <app-side-products></app-side-products>
    </div>
    <div class="column is-half">
      <article class="tile is-child is-light is-bold">
        <p class="subtitle">DUDU-KRIN ORIGINAL PET SHAMPOO</p>
        <div class="content notification is-radiusless">
          <p>Kenya's favourite insecticidal pet shampoo. Contains natural Kenyan pyrethrum
            for the effective control of ticks, fleas and lice.</p>
          <p><strong>For use on dogs and cats</strong></p>
          <ol>
            <li>Wet the animal.</li>
            <li>Apply shampoo and work into the coat thoroughly</li>
            <li>Leave the shampoo on the animal for 15-30 minutes</li>
            <li>Rinse off. Gives protection for up to 3 days</li>
          </ol>
          <p>Available in 250m1, I litre, 2 litre and 5 litre bottles</p>
          <p><strong>Packaging:</strong></p>
          <em>
            <p>16 x 250 ml bottles</p>
            <p>12 x 1 litre bottles</p>
            <p>6 x 2 litre bottles</p>
            <p>1 x 5 litre bottles</p>
          </em>
        </div>
      </article>
    </div>
    <div class="column">
    <p class="subtitle">Downloads</p>
    <a href="../../../assets/downloads/DUDU-KRIN%20ORIGINAL%20PET%20SHAMPOO.pdf">
      <img src="../../../assets/icons/Krin%20Original.jpg" alt="">
    </a>
      <app-side-downloads></app-side-downloads>
    </div>
  </div>
</section>`,
styles: [ `a img{height:50px;}`]
})
export class DudukrinOriginalPetShampooComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
