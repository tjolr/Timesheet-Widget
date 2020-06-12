import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarydayComponent } from './summaryday.component';

describe('SummarydayComponent', () => {
  let component: SummarydayComponent;
  let fixture: ComponentFixture<SummarydayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarydayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
