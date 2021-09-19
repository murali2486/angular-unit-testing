import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTestingComponent } from './input-testing.component';

describe('InputTestingComponent', () => {
  let component: InputTestingComponent;
  let fixture: ComponentFixture<InputTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get name value when binding', () => {
    component.name = 'Murali';
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.myName).toContain('Murali');
  });
});
