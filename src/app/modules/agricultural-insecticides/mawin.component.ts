import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mawin',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold"><p class="subtitle">Mawin</p>
            <div class="content notification is-radiusless">
              <p><strong>Organic Plant Care</strong></p>
              <p><strong>Enhances Farm Productivity and Quality </strong></p>
              <p>This is an organic plant growth supplement that enhances farm produce productivity and quality.</p>
              <p>It is a foliar application that has dissolved solids containing potassium humate, protein
                fractions, carbohydrates and inherent growth stimulants from fish and vegetable sources at 15%.</p>
              <p>It is suitable for all crops for increase of rootmass, promotes new terminal and lateral shoots,
                increases chlorophyll, increases leaf area and photosynthesis, reduces flower abortion and
                induces more flower buds, promotes uniform fruit shape and size. </p>
              <p>It enhances crop yield and quality of produce for good marketability.</p>
              <p>It is available in packages of 1L, 5L. </p>
            </div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/mawin.png" alt="">
            </div>
          </article>
        </div>
        <div class="column">
        <p class="subtitle">Downloads</p>
        <a href="../../../assets/downloads/2017%20MAWIN%20MSDS.pdf2017%20FLOWER%20DUST%20Rev%20MSDS.pdf">
          <img src="../../../assets/icons/mawin.jpg" alt="">
        </a>
          <app-side-downloads></app-side-downloads>
        </div>
      </div>
    </section>`,
styles: [ `a img{height:50px;}`]
})
export class MawinComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
