import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmodifniveauComponent } from './formmodifniveau.component';

describe('FormmodifniveauComponent', () => {
  let component: FormmodifniveauComponent;
  let fixture: ComponentFixture<FormmodifniveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmodifniveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmodifniveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
