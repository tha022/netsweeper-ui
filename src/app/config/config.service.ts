import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  basePath: string = 'http://localhost:3000';
  taxUserPath: string = 'taxusers';

  strongPassword: string = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$';

}
