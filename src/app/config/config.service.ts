import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  basePath: string = 'http://localhost:4200';
  usersPath: string = 'pages/users';
  taxUserPath: string = 'taxusers';
  merchantPath: string = 'merchants';
  oldYear: number = 1970;
  currentYear: number = Number(new Date().getFullYear());
  strongPassword: string = '[0-9]{8}';
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
}
