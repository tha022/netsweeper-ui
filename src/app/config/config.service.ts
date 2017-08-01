import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  basePath: string = 'http://localhost:4200';
  taxUserPath: string = 'taxusers';
  merchantPath: string = 'merchants';
  oldYear: number = 1970;
  currentYear: number = Number(new Date().getFullYear());

  // TODO: strongPassword: string = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$';
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
