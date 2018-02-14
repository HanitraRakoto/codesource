import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminsertniveauComponent } from './forminsertniveau.component';

describe('ForminsertniveauComponent', () => {
  let component: ForminsertniveauComponent;
  let fixture: ComponentFixture<ForminsertniveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminsertniveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForminsertniveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
