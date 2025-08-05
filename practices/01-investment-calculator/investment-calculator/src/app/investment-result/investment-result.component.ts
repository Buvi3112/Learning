import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CommonModule],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);


  results = computed(() => this.investmentService.resultData());
   //this.results = this.investmentService.resultData.asReadonly(); -> another way of readOnly signal
  

  trackByYear(index: number, item: any): number {
    return item.year; // Unique identifier
  }

}
