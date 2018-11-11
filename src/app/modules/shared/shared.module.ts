import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularDropdownModule } from 'angular-dropdown';

import { SideDownloadsComponent } from './side-downloads/side-downloads.component';
import { SideProductsComponent } from './side-products/side-products.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularDropdownModule
  ],
  declarations: [
    SideDownloadsComponent,
    SideProductsComponent
   ],
  exports: [
    CommonModule,
    SideDownloadsComponent,
    SideProductsComponent]
})

export class SharedModule { }
