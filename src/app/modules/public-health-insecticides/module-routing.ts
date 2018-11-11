import { Routes } from '@angular/router';
import { FarutoxComponent, FlowerDSComponent } from './index';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'farutox'},
    { path: 'flower-ds-4', component: FlowerDSComponent },
    { path: 'farutox', component: FarutoxComponent }
];
