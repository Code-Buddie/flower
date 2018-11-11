import { Routes } from '@angular/router';
import { KnapsackSprayersComponent, TriggerSprayersComponent } from './index';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'knapsack-sprayers' },
    { path: 'knapsack-sprayers', component: KnapsackSprayersComponent },
    { path: 'trigger-sprayers', component: TriggerSprayersComponent }
];
