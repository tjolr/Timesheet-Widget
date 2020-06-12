import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummypageComponent } from './dummypage.component';

describe('DummypageComponent', () => {
  let component: DummypageComponent;
  let fixture: ComponentFixture<DummypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
