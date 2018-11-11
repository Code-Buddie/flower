import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

// Routes
import { ROUTES } from './module-routing';

import {
  FlowerDudusprayComponent,
  FlowerLiquidMosquitoRepellantComponent,
  FlowerMossiChipsComponent,
  MosquitoCoilsComponent,
  TabardInsectRepelantComponent,
  PaliWpResidueInsecticideComponent,
  MosquitoSticksComponent,
  MosquitoTrapsComponent,
  MosquitoRepellantToweletteComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    FlowerDudusprayComponent,
    FlowerLiquidMosquitoRepellantComponent,
    FlowerMossiChipsComponent,
    MosquitoCoilsComponent,
    TabardInsectRepelantComponent,
    PaliWpResidueInsecticideComponent,
    MosquitoSticksComponent,
    MosquitoTrapsComponent,
    MosquitoRepellantToweletteComponent
  ]
})
export class MosquitoControlModule { }
