import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'export-marchant',
  templateUrl: './export-merchant.component.html',
  styleUrls: ['./export-merchant.component.css']
})
export class ExportMerchantComponent implements OnInit {
  monthNames: any;
  yearsRange: any;

  selectedYear: number;
  selectedMonth: string;
  selectedRadio: string;

  constructor(
    private config: ConfigService
  ) {}

  ngOnInit() {
    this.monthNames = this.generateMonth();
    this.yearsRange = this.generateYears(this.config.oldYear, this.config.currentYear);
  }

  generateMonth() {
    const month = this.config.monthNames;

    return month;
  }

  generateYears(startYear, endYear) {
    const years = [];

    while (startYear !== endYear) {
      years.push(startYear);
      startYear < endYear ? startYear++ : endYear++;
    }
    years.push(startYear);

    return years;
  }

  setYear(year) {
    this.selectedYear = year['value'];
  }

  setMonth(month) {
    this.selectedMonth = month['value'];
  }

  setRadio(radio) {
    this.selectedRadio = radio['value'];
  }

  handleSelectedDate() {
    if (!this.selectedMonth || !this.selectedYear || !this.selectedRadio) {
      return;
    }

    // TODO: Remove after service for generate report will be ready
    alert(
      `Month: ${this.selectedMonth} Year: ${this.selectedYear} Option: ${this.selectedRadio}`
    );
  }

}
