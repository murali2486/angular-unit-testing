import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-testing',
  templateUrl: './interpolation-testing.component.html',
  styleUrls: ['./interpolation-testing.component.scss']
})
export class InterpolationTestingComponent implements OnInit {
  totalVotes: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
