import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

// Routes
import { ROUTES } from './module-routing';

import { FlowerDsComponent, BioBoostComponent, MawinComponent, FlowerDustComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    FlowerDsComponent,
    BioBoostComponent,
    MawinComponent,
    FlowerDustComponent
  ]
})
export class AgriculturalInsecticidesModule { }
