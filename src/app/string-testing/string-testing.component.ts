import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-testing',
  templateUrl: './string-testing.component.html',
  styleUrls: ['./string-testing.component.scss']
})
export class StringTestingComponent implements OnInit {
  name = 'Murali';
  a=10;
  b=20;
  c: number | undefined;
  numbers = [10, 20, 30];
  num= 1;
  constructor() { }

  ngOnInit(): void {
  }
}
