import {Routes} from '@angular/router';
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

export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'mosquito-coils'},
  {path: 'flower-duduspray', component: FlowerDudusprayComponent},
  {path: 'flower-liquid-mosquito-repellant', component: FlowerLiquidMosquitoRepellantComponent},
  {path: 'mosquito-coils', component: MosquitoCoilsComponent},
  {path: 'flower-mossi-chips', component: FlowerMossiChipsComponent},
  {path: 'tabard-insect-repelant', component: TabardInsectRepelantComponent},
  {path: 'mosquito-sticks', component: MosquitoSticksComponent},
  { path: 'mosquito-traps', component: MosquitoTrapsComponent},
  {path: 'towelletes', component: MosquitoRepellantToweletteComponent},
  {path: 'pali-50-wp-residue', component: PaliWpResidueInsecticideComponent}
];
