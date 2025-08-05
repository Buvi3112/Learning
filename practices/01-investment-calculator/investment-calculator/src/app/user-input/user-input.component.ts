import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
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
    console.log("------------------")
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,  // adding + before variable to convert string to number
      duration: +this.enteredDuration, 
      expectedReturn: +this.enteredExtenderReturn, 
      annualInvestment: +this.enteredAnnualInvestment})
  }
}
