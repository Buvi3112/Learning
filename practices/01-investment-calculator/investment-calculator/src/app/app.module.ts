import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/userinput.mudule";

@NgModule({
    declarations: [AppComponent, InvestmentResultComponent, HeaderComponent],
    imports: [FormsModule, CommonModule, BrowserModule, UserInputModule],
    bootstrap: [AppComponent]
})
export class AppModule{}