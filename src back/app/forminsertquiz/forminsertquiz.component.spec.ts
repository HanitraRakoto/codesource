import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminsertquizComponent } from './forminsertquiz.component';

describe('ForminsertquizComponent', () => {
  let component: ForminsertquizComponent;
  let fixture: ComponentFixture<ForminsertquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminsertquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForminsertquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
