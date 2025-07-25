import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number, 
    duration: number, 
    expectedReturn: number, 
    annualInvestment: number
  }>()
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExtenderReturn = '0';
  enteredDuration = '10';

  onSubmit() {
    console.log("------------------")
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,  // adding + before string to convert string to number
      duration: +this.enteredDuration, 
      expectedReturn: +this.enteredExtenderReturn, 
      annualInvestment: +this.enteredAnnualInvestment})
  }
}
