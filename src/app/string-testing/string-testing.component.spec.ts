import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringTestingComponent } from './string-testing.component';

describe('StringTestingComponent', () => {
  let component: StringTestingComponent;
  let fixture: ComponentFixture<StringTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have inner text', ()=> {
    component.name='krishna';
    fixture.detectChanges();
    const container = fixture.nativeElement;
    expect(container.querySelector('.name').textContent).toContain('krishna');
  });
});
