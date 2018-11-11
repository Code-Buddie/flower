import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

// Routes
import { ROUTES } from './module-routing';

import { FarutoxComponent, FlowerDSComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ FarutoxComponent, FlowerDSComponent ]
})
export class PublicHealthInsecticidesModule { }
