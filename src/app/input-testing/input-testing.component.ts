import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-testing',
  templateUrl: './input-testing.component.html',
  styleUrls: ['./input-testing.component.scss']
})
export class InputTestingComponent implements OnInit {
  @Input() name: string | undefined;
  myName: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.myName = this.name;
  }

}
