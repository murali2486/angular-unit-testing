import { FunctionTestingComponent } from './../function-testing/function-testing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterLinkTestingComponent } from './router-link-testing.component';

describe('RouterLinkTestingComponent', () => {
  let component: RouterLinkTestingComponent;
  let fixture: ComponentFixture<RouterLinkTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path:'func',
            component: FunctionTestingComponent
          }
        ])
      ],
      declarations: [
         RouterLinkTestingComponent
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinkTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should route to funtion testing component', waitForAsync(inject([Router, Location], (router: Router, location: Location) => {
    fixture.detectChanges();
    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/func');
    });
  })));
  it('should go to function testing component when click button', waitForAsync(inject([Router, Location], (router: Router, location: Location) => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/func');
      });
  })));
});
