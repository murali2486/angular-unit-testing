import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';

import { ReactiveFormsTestingComponent } from './reactive-forms-testing.component';

describe('ReactiveFormsTestingComponent', () => {
  let component: ReactiveFormsTestingComponent;
  let fixture: ComponentFixture<ReactiveFormsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ ReactiveFormsTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should contain name and locations controls', () => {
    expect(component.myform.contains('name')).toBeTruthy();
    expect(component.myform.contains('locations')).toBeTruthy();
  });
  it('should validate name field', ()=> {
    let control = component.myform.get('name');
    control?.setValue('');
    expect(control?.invalid).toBeTruthy();
  });
  it('should create locations array control', () => {
    let array=component.myform.get('locations') as FormArray;
    expect(array.controls[0].get('name')).toBeTruthy();
    expect(array.controls[0].get('description')).toBeTruthy();
    expect(array.controls[0].get('price')).toBeTruthy();
  });
});
