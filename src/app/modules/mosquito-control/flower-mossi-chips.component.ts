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
          <article class="tile is-child is-light is-bold"><p class="subtitle">Mossi Chips</p>
            <div class="content notification is-radiusless">
              <p>Mossi Chips are excellent Mosquito Mats designed to be used in living
                areas and bedrooms to kill all mosquitoes. Use with an electric heater unit.
                Plug in and leave on through the night for 8-10 hours protection.
                Simply replace with a new MOSSI CHIP each night</p>
              <br>
              <p><strong>Packaging:</strong></p>
              <p><em>12 x Starter Pack units</em></p>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/mosquito-chips.png" alt="">
            </div>
            <div class="content notification is-radiusless">
              <p><strong>A range of fragrances to suit all:</strong></p>
              <ul class="menu-list">
                <li>NEW Lavender and Roman Chamomile essential oils</li>
                <li>NEW Citronella, Bergamot and Geranium essential oils</li>
                <li>Floral fragrance</li>
                <li>Sandalwood fragrance</li>
                <li>Regular (fragrance free)</li>
              </ul>
              <p>Available in Starter Pack (electric heater unit plus 10 Mossi Chips)
                and Refill Pack (30 individual Mossi Chips)</p>
              <p><strong>Packaging:</strong></p>
              <em>
                <p>24 x Refill Pack units</p>
                <p>60 x Refill Pack units</p>
              </em>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/mosquito-chips-array.png" alt="">
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a
          href="../../../assets/downloads/2017%20Mossi%20Chips%20Citronella,%20Bergamot%20&%20Garanium%20MSDS.pdf">
          <img src="../../../assets/icons/citronella%20icon.jpg" alt="">
        </a>
        <a href="../../../assets/downloads/2017%20Mossi%20Chips%20Lavender%20&%20Roman%20Chamomile%20MSDS.pdf">
          <img src="../../../assets/icons/lavender%20icon.jpg" alt="">
        </a>
        <a href="../../../assets/downloads/2017%20Mossi%20Chips%20Regular%20(un-scented)%20MSDS.pdf">
          <img src="../../../assets/icons/regular%20icon.jpg" alt="">
        </a>
        <a href="../../../assets/downloads/2017%20Mossi%20Chips%20Rose%20MSDS.pdf">
          <img src="../../../assets/icons/rose%20icon.jpg" alt="">
        </a>
        <a href="../../../assets/downloads/2017%20Mossi%20Chips%20Sandal%20MSDS.pdf">
          <img src="../../../assets/icons/sandal%20icon.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class FlowerMossiChipsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
