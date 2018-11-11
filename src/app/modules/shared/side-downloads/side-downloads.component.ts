import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-downloads',
  template: `<article class="is-light">
    <a href="assets/downloads/KAPI LTD PRODUCT E-BROCHURE.pdf"><img src="../../../assets/asset 25.jpeg" alt=""></a>
  <a href="assets/downloads/KAPI LTD HOTEL E-BROCHURE.pdf"><img src="../../../assets/asset 27.jpeg" alt=""></a>
  <a href="assets/downloads/KAPI LTD AGRICULTURAL E-BROCHURE.pdf"><img src="../../../assets/asset 26.jpeg" alt=""></a>
  <hr>
  <p class="subtitle">Follow us:</p>
          <div class="field is-grouped">
            <p class="buttons">
              <a href="http://www.youtube.com/KapiLimited" class="button is-small is-rounded is-danger">
                <abbr title="Watch our videos">
                  <span class="icon">
                    <i class="fab fa-youtube"></i>
                  </span>
                </abbr>
              </a>

              <a href="https://twitter.com/kapi_limited" class="button is-small is-rounded is-info">
                <abbr title="Follow us on twitter">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                </abbr>
              </a>

              <a href="http://www.facebook.com/pages/KAPI-Limited/243157832378280" class="button is-small is-rounded is-link">
                <abbr title="Watch our videos">
                  <span class="icon is-small">
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </abbr>
              </a>
            </p>
          </div>

          <button class="button is-info is-small is-outlined">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="" data-show-count="false">
              <span class="icon is-large">
                <i class="fab fa-twitter"></i>
              </span> Tweet us
            </a>
          </button>
</article>`,
  styleUrls: ['./side-downloads.component.css']
})
export class SideDownloadsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
