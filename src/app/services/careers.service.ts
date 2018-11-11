import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  constructor() { }

  getAllCareers() {
    return CAREERS;
  }

  addCareer(newCareer) {
    CAREERS.push(newCareer);
  }

  getOneCareers() {
    // return CAREERS.find
    return CAREERS[1];
  }

  getSalesPeople() {
    return SALES;
  }
}

const CAREERS: any[] = [
  {
    id: 1,
    title: 'manajer',
    // tslint:disable-next-line:max-line-length
    description: `Looking for a React Native / Flutter App developer (Minimum 1 Year Experience) – Specialized in object oriented design and analysis coupled with test driven development. Key skills required Knowledge working with APIs  Converting mobile application designs`,
    deadline: '12/10/2018'
  },
  {
    id: 2,
    title: 'manajer',
    // tslint:disable-next-line:max-line-length
    description: 'Looking for a React Native / Flutter App developer (Minimum 1 Year Experience) – Specialized in object oriented design and analysis coupled with test driven development. Key skills required Knowledge working with APIs  Converting mobile application designs',
    deadline: '12/10/2018'
  },
  {
    id: 3,
    title: 'manajer',
    // tslint:disable-next-line:max-line-length
    description: 'Looking for a React Native / Flutter App developer (Minimum 1 Year Experience) – Specialized in object oriented design and analysis coupled with test driven development. Key skills required Knowledge working with APIs  Converting mobile application designs',
    deadline: '12/10/2018'
  },
  {
    id: 4,
    title: 'manajer',
    // tslint:disable-next-line:max-line-length
    description: 'Looking for a React Native / Flutter App developer (Minimum 1 Year Experience) – Specialized in object oriented design and analysis coupled with test driven development. Key skills required Knowledge working with APIs  Converting mobile application designs',
    deadline: '12/10/2018'
  }
];

const SALES: any[] = [
  {
    id: 1,
    region: 'Nairobi and Lower Eastern',
    person: 'Anunda Atsulu',
    tel: '0719282059/ 0795111002',
    mail: 'anunda'
  },
  {
    id: 2,
    region: 'Coast',
    person: 'Isaiah Simiyu',
    tel: '0702483588/ 0722559817',
    mail: 'isaiah'
  },
  {
    id: 3,
    region: 'South Nyanza',
    person: 'Cavin Okoth',
    tel: '0791350332/ 07230490055',
    mail: 'cavin'
  },
  {
    id: 4,
    region: 'North Nyanza',
    person: 'John Wabwire',
    tel: '0791350334/ 0722214543',
    mail: 'wabwiremoa'
  },
  {
    id: 5,
    region: 'North Rift',
    person: 'Belinda Musyoki',
    tel: '0791350330/ 07217690274',
    mail: 'belinda'
  },
  {
    id: 6,
    region: 'Mt. Kenya',
    person: 'Eunice Ngatia',
    tel: '0791349878/ 0724117424',
    mail: 'eunice'
  },
  {
    id: 7,
    region: 'Nakuru, Nyahurur, Naivasha, Gilgil',
    person: 'Mary Wanyoike',
    tel: '0795111008',
    mail: 'mary'
  }
];
