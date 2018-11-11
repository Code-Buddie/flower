import { Routes } from '@angular/router';
import {
    AntiBacterialRangeComponent,
    DudukringentlePetShampooComponent,
    DudukrinOriginalPetShampooComponent,
    DudukrinSuperPetShampooComponent
} from './index';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dudu-krin-original-pet-shampoo'},
    { path: 'anti-bacterial-range', component: AntiBacterialRangeComponent },
    { path: 'dudu-krin-gentle-pet-shampoo', component: DudukringentlePetShampooComponent },
    { path: 'dudu-krin-original-pet-shampoo', component: DudukrinOriginalPetShampooComponent },
    { path: 'dudu-krin-super-pet-shampoo', component: DudukrinSuperPetShampooComponent }
];
