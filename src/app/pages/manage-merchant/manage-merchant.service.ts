import { Injectable } from '@angular/core';

@Injectable()
export class ManageMerchantService {

  manageMerchantData = [
    {
      id: 1,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 2,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 3,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 4,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 5,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 6,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 7,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 8,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 9,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 10,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 11,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 12,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 13,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 14,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    {
      id: 15,
      merchantName: 'Mark',
      email: 'mdo@gmail.com',
      phoneNumber: '9865104152',
      vatNumber: '123456789',
    },
    
  ];

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true,
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true,
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false,
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true,
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false,
    },
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.manageMerchantData);
      }, 1000);
    });
  }
}
