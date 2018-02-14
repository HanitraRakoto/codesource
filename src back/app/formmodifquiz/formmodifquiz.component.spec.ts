import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmodifquizComponent } from './formmodifquiz.component';

describe('FormmodifquizComponent', () => {
  let component: FormmodifquizComponent;
  let fixture: ComponentFixture<FormmodifquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmodifquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmodifquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
