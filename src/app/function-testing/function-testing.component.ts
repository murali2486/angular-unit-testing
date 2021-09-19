import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-testing',
  templateUrl: './function-testing.component.html',
  styleUrls: ['./function-testing.component.scss']
})
export class FunctionTestingComponent implements OnInit {
  name = 'Murali';
  a=10;
  b=20;
  c: number | undefined;
  numbers = [10, 20, 30];
  person = {
    name: 'Murali',
    city: 'Nellore'
  }
  v=0;
  totalVotes=0;
  constructor() { }

  ngOnInit(): void {
    this.compute(20);
  }
  myName(){
    return this.name;
  }
  sum(){
    return this.a+this.b;
  }
  getSum() {
    this.c = this.a + this.b;
    this.getC(this.c);
  }
  getNumbers(){
    return this.numbers;
  }
  getC(value: number){
    return value;
  }
  getPerson(){
    return this.person;
  }
  compute(val: number){
    if(val < 0){
      return 0;
    } else {
      return val + 1;
    }
  }
  doThis(){
    let x = 0;
    let y;
    while(x < 10){
      y = x+1;
      x++;
    }
    return y;
  }
  doFor(){
    for(let x= 0; x<10; x++){
      this.v+=x;
    }
  }
  upVote(){
    return this.totalVotes++;
  }
  downVote() {
    return this.totalVotes--;
  }
}
