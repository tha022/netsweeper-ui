import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  getData() {
    const pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.merchants',
        stats: '17,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.tax_users',
        stats: '9,745',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.tax_collected',
        stats: '$ 32,592',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'dashboard.items_sold',
        stats: '$ 178,391',
        icon: 'money',
      },
    ];
  }
}
