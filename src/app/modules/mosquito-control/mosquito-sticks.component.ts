import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flower-mossi',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">Mosquito Killer Sticks</p>
            <div class="content notification is-radiusless">
              <p>Now available in bright new packaging and a variety of fragrances and sizes.</p>
            </div>
            <div class="content notification is-radiusless">
              <p>Mosquito Sticks are ideal for use in the home, as the active insecticide is natural
                pyrethrum. They may also be used outdoors and will kill a wide range of insects
                including mosquitoes and flies. Fragrances include Rose, Sandal and Regular. </p>
              <p>Each stick burns for approx. 1 hour</p>
              <p>Approx 12 sticks per pack.</p>
              <p><strong>Packaging:</strong></p>
              <em>
                <p>48 x regular size packs</p>
                <p>144 x regular size packs</p>
              </em>
            </div>
            <div class="content is-radiusless">
              <div class="columns has-text-centered">
                <div class="column">
                  <img src="../../../assets/products/mosquito-sticks.png" alt="">
                </div>
                <div class="column">
                  <img src="../../../assets/products/mosquito-stick.png" alt="">
                </div>
              </div>
            </div>
            <div class="content notification is-radiusless">
              <p>Also available in Jumbo Size (regular fragrance only) with a burning time of
                approx 2 hours. 10 sticks per pack</p>
              <p><strong>Packaging:</strong></p>
              <em>36 x jumbo size packs</em>
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/FLOWER%20MUNONO%20MOSQUITO%20STICKS%20MSDS.pdf">
          <img src="../../../assets/icons/mosquito%20sticks%20icon.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
  styles: []
})
export class MosquitoSticksComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
