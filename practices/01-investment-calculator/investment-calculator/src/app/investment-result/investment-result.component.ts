import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: false,
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
