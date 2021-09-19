import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { InterpolationTestingComponent } from './interpolation-testing/interpolation-testing.component';
import { StringTestingComponent } from './string-testing/string-testing.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsTestingComponent } from './reactive-forms-testing/reactive-forms-testing.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        StringTestingComponent,
        InterpolationTestingComponent,
        TemplateFormsComponent,
        ReactiveFormsTestingComponent
      ],
      providers: [
        FormBuilder
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-testing app is running!');
  });
});
