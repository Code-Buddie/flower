import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../../services/modules.service';
import { PreviousRouteService } from '../../../services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-products',
  template: `
  <p class="subtitle">Product Categories</p>
    <div class="menu">
      <div *ngFor="let module of modules" id="para-{{module.link}}">
      <p class="subtitle"><i class="fab fa-pagelines"></i> {{module.name}}<p>
        <div id="{{module.link}}"class="options manual"><p *ngFor="let option of module.options">
          <a class="side-route" routerLink="/{{module.link}}/{{option}}" routerLinkActive="is-active">{{option}}</a>
        </p></div>
      </div>
    </div>
  `,
  styleUrls: ['./side-products.component.css']
})

export class SideProductsComponent implements OnInit {

  modules: any;
  clicked: Boolean = false;
  previousRoute: string;
  currentRoute: string;
  linkElements: any;

  constructor(
    private modulesService: ModulesService,
    private previousRouteService: PreviousRouteService,
    private router: Router) { }

  ngOnInit() {
    this.modules = this.modulesService.getModules();
    this.redirectRoutes();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.linkElements = document.getElementsByClassName('side-route');
    for (let i = 0; i < this.linkElements.length; i++) {
      const linkElement = this.linkElements[i];
      linkElement.addEventListener('click', () => {
        window.location = linkElement.href;
        this.clicked = true;
        if ( this.clicked ) {
          linkElement.href.reload();
        }
      });
    }
  }

  redirectRoutes() {
    this.previousRoute = this.previousRouteService.getPreviousUrl();
    this.currentRoute = this.router.url;
    if (this.currentRoute !== this.previousRoute) {
      // window.location.reload();
      // console.log(window.location.href, this.previousRoute, this.currentRoute);
    }
  }

}
