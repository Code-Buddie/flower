import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flower-ds-ec',
  template: `
    <section class="container">
      <div class="columns">
        <div class="column">
          <app-side-products></app-side-products>
        </div>
        <div class="column is-half">
          <article class="tile is-child is-light is-bold">
            <p class="subtitle">Flower Ds 4 EC Agricultural insecticide</p>
            <div class="content notification is-radiusless"> A 100% natural insecticide made with natural Kenyan Pyrethrum</div>
            <div class="content is-radiusless">
              <img src="../../../assets/products/flower-ds-4-ec.png" alt="">
            </div>
            <div class="content notification is-radiusless">
              <p><strong>Flower Ds 4 EC is suitable for use in Organic Agriculture conforming to Regulations n&deg; 834/2007
                and 889/2008</strong></p>
              <p><strong>Inspected by ECOCERT SA F-32600</strong></p>
              <p>Zero phyhotoxicity on flowers and vegetables. Controlled 3rd party trials have proven zero phyhotoxicity.</p>
              <p>Zero residue after 24 hours.Controlled trials and analysis by Egerton University
                together with KEPHIS show ZERO residues 24 hours after application. </p>
              <p>One day pm-harvest interval </p>
              <p>30 minutes Re-Entry Interval for workers after spraying. </p>
              <p>Broad spectrum of insect kill </p>
              <p>No resistance by insects. Pyrethrum has no recorded instances of insect resistance.</p>
              <p><em>Flower DS 4 EC is manufactured and distributed by Kapi Limited.
                For further details, Contact:<strong> Winrose on 0710 615 604</strong></em></p>
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
export class FlowerDsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
