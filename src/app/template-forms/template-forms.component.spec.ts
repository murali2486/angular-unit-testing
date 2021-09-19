import { By } from '@angular/platform-browser';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TemplateFormsComponent } from './template-forms.component';
import { DebugElement } from '@angular/core';

describe('TemplateFormsComponent', () => {
  let component: TemplateFormsComponent;
  let fixture: ComponentFixture<TemplateFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ TemplateFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    fixture =TestBed.createComponent(TemplateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update value of input field', fakeAsync(()=>{
    const input = fixture.nativeElement.querySelector('input');
    input.value='1234';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.eno).toEqual('1234');
  }));
  it('should show validation error if value is empty', fakeAsync(() => {
    const error = fixture.debugElement.nativeElement;
    const input = fixture.nativeElement.querySelector('input');
    input.value='';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(error.innerText).toBe('Eno field is required.');
  }));
});
