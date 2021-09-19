import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InterpolationTestingComponent } from './interpolation-testing.component';

describe('InterpolationTestingComponent', () => {
  let component: InterpolationTestingComponent;
  let fixture: ComponentFixture<InterpolationTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show totalvotes', () => {
    let de=fixture.debugElement.query(By.css('.totVotes'));
    let ele: HTMLElement = de.nativeElement;
    expect(ele.innerText).toBe('20');
  });
});
