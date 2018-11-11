import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent, HomeComponent, ContactUsComponent } from './components/index';
import { DistributorsRequiredComponent, ExportsComponent } from './components/index';
import { NaturalPyrethrumComponent, ProductsComponent, WhereToBuyComponent } from './components/index';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'buy', component: WhereToBuyComponent },
  { path: 'natural', component: NaturalPyrethrumComponent },
  { path: 'distributors', component: DistributorsRequiredComponent },
  { path: 'exports', component: ExportsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactUsComponent },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'application-equipment',
    loadChildren: 'src/app/modules/application-equipment/application-equipment.module#ApplicationEquipmentModule'
  },
  {
    path: 'agricultural-insecticides',
    loadChildren: './modules/agricultural-insecticides/agricultural-insecticides.module#AgriculturalInsecticidesModule'
  },
  {
    path: 'mosquito-control',
    loadChildren: './modules/mosquito-control/mosquito-control.module#MosquitoControlModule'
  },
  {
    path: 'pet-shampoos',
    loadChildren: './modules/pet-shampoos/pet-shampoos.module#PetShampoosModule'
  },
  {
    path: 'public-health-insecticides',
    loadChildren: './modules/public-health-insecticides/public-health-insecticides.module#PublicHealthInsecticidesModule'
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
