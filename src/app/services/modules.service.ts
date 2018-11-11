import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor() { }

  getModules() {
    return MODULES;
  }

}

export const MODULES = [{
  id: '1',
  name: 'mosquito control',
  link: 'mosquito-control',
  options: [
    'flower-duduspray',
    'flower-liquid-mosquito-repellant',
    'flower-mossi-chips',
    'mosquito-coils',
    'pali-50-wp-residue',
    'mosquito-sticks',
    'mosquito-traps',
    'towelletes',
    'tabard-insect-repelant']
},
{
  id: '2',
  name: 'pet shampoos',
  link: 'pet-shampoos',
  options: [
    'anti-bacterial-range',
    'dudu-krin-gentle-pet-shampoo',
    'dudu-krin-original-pet-shampoo',
    'dudu-krin-super-pet-shampoo' ]
},
{
  id: '3',
  name: 'public health insecticides',
  link: 'public-health-insecticides',
  options: [
    'farutox',
    'flower-ds-4']
},
{
  id: '4',
  name: 'agricultural insecticides',
  link: 'agricultural-insecticides',
  options: [
    'bio-boost',
    'flower-ds-4-ec',
    'flower-dust',
    'mawin']
},
{
  id: '5',
  name: 'application equipment',
  link: 'application-equipment',
  options: [
    'knapsack-sprayers',
    'trigger-sprayers']
}
];
