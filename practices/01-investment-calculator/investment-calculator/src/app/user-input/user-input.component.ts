import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExtenderReturn = '0';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService){}

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,  // adding + before variable to convert string to number
      duration: +this.enteredDuration, 
      expectedReturn: +this.enteredExtenderReturn, 
      annualInvestment: +this.enteredAnnualInvestment})
  }
}
