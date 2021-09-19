import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionTestingComponent } from './function-testing.component';

describe('FunctionTestingComponent', () => {
  let component: FunctionTestingComponent;
  let fixture: ComponentFixture<FunctionTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return name', () => {
    component.name = 'Lakshmi';
    let result = component.myName();
    expect(result).toBe(component.name);
  });
  it('should return sum of a and b', () => {
    component.a=40;
    component.b=50;
    let result = component.sum();
    expect(result).toBe(90);
  });
  it('should return c value', ()=> {
    component.a=20;
    component.b=30;
    component.getSum();
    expect(component.c).toBe(50);
  });
  it('should return numbers in array', () => {
    const result = component.getNumbers();
    expect(result).toContain(10);
  });
  it('should return person object', () => {
    const person = {
      name: 'Murali',
      city: 'Nellore'
    };
    fixture.detectChanges();
    let result = component.getPerson();
    expect(result).toEqual(person);
  });
  it('should return 0 if value is negative', ()=> {
    let result = component.compute(-1);
    expect(result).toEqual(0);
  });
  it('should return value by adding 1 if value is positive', () => {
    let result = component.compute(1);
    expect(result).toEqual(2);
  });
  it('should return y value', () => {
    let result = component.doThis();
    expect(result).toEqual(10);
  });
  it('should update v', ()=> {
    let result = component.doFor();
    expect(component.v).toEqual(45);
  });
  it('should increase totalVotes when click upvote', ()=> {
    component.totalVotes = 5;
    component.upVote();
    fixture.detectChanges();
    expect(component.totalVotes).toBe(6);
  });
  it('should decrease totalVotes when click downvote', ()=> {
    component.totalVotes = 5;
    component.downVote();
    fixture.detectChanges();
    expect(component.totalVotes).toBe(4);
  });
});
