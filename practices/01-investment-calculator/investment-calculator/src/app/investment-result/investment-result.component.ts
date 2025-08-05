import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CommonModule],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  get results()
  {
    return this.investmentService.resultData;
  }

  trackByYear(index: number, item: any): number {
    return item.year; // Unique identifier
  }

}
