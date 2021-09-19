import { InputTestingComponent } from './../input-testing/input-testing.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTestingComponent } from './output-testing.component';

describe('OutputTestingComponent', () => {
  let component: OutputTestingComponent;
  let fixture: ComponentFixture<OutputTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OutputTestingComponent,
        InputTestingComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit totalvotes when click upvote', () => {
    component.totalVotes = 0;
    component.votesChanged.subscribe(tv => component.totalVotes = tv);
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });
});
