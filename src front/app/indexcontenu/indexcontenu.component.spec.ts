import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcontenuComponent } from './indexcontenu.component';

describe('IndexcontenuComponent', () => {
  let component: IndexcontenuComponent;
  let fixture: ComponentFixture<IndexcontenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcontenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcontenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
