import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-output-testing',
  templateUrl: './output-testing.component.html',
  styleUrls: ['./output-testing.component.scss']
})
export class OutputTestingComponent implements OnInit {
  totalVotes=0;
  sendName = 'Murali'
  @Output() votesChanged: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  upVote() {
    this.totalVotes++;
    this.votesChanged.emit(this.totalVotes);
  }

}
