import { Component } from '@angular/core';
import { Calc } from 'calc_npm_dsg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'calculadora';
  displaySymbol : boolean = false;
  displayAction : string  = "";

  constructor(private calculator : Calc){}
  display   : string = '0';
  firstValue: number | null = null;
  action    : string | null = null;

  numClick(val : number) {
    this.displaySymbol = false;
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    } 
  }

  oper(action : string) {
    this.displayAction = action;
    this.displaySymbol = true;
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    const a : any = this.firstValue;
    const b : any = parseFloat(this.display);

    let result : any;
    if (this.action === 'X') {
      result = this.calculator.multiply(a,b)
    }
    else if (this.action === '%') {
      result = this.calculator.division(a,b)
    }
    else if (this.action === '+') {
      result = this.calculator.sum(a,b)
    }
    else if (this.action === '-') {
      result = this.calculator.substract(a,b)
    }

    this.firstValue = result;
    this.display = result.toString();
  }

  clear(){
    this.display = '0'
  }
}
