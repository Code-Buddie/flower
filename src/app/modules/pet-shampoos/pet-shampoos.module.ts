import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

// Routes
import { ROUTES } from './module-routing';


import {
  AntiBacterialRangeComponent,
  DudukringentlePetShampooComponent,
  DudukrinOriginalPetShampooComponent,
  DudukrinSuperPetShampooComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES) ],
  declarations: [
    AntiBacterialRangeComponent,
    DudukringentlePetShampooComponent,
    DudukrinOriginalPetShampooComponent,
    DudukrinSuperPetShampooComponent
  ]
})
export class PetShampoosModule { }
