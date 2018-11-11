import { Routes } from '@angular/router';
import { FlowerDsComponent, BioBoostComponent, MawinComponent, FlowerDustComponent } from './index';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'flower-ds-4-ec'},
    { path: 'flower-ds-4-ec', component: FlowerDsComponent },
    { path: 'bio-boost', component: BioBoostComponent },
    { path: 'mawin', component: MawinComponent },
    { path: 'flower-dust', component: FlowerDustComponent }
];
