import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './modules/shared/shared.module';
import { AngularDropdownModule } from 'angular-dropdown';

// AIzaSyAfJTVKnpLl0ULuuwDuix-9ANpyQhP6mfc

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { WhereToBuyComponent } from './components/where-to-buy/where-to-buy.component';
import { NaturalPyrethrumComponent } from './components/natural-pyrethrum/natural-pyrethrum.component';
import { DistributorsRequiredComponent } from './components/distributors-required/distributors-required.component';
import { ExportsComponent } from './components/exports/exports.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponent } from './shared/shared.component';
import { ErrorComponent } from './error/error.component';

import { ModulesService } from './services/modules.service';
import { PreviousRouteService } from './services/route.service';
import { CarouselService } from './services/carousel.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    WhereToBuyComponent,
    NaturalPyrethrumComponent,
    DistributorsRequiredComponent,
    ExportsComponent,
    CareersComponent,
    ContactUsComponent,
    FooterComponent,
    SharedComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    AngularDropdownModule
  ],
  providers: [ModulesService, PreviousRouteService, CarouselService],
})
export class AppModule { }

