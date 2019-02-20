import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BptComponent } from './bpt.component';

describe('BptComponent', () => {
  let component: BptComponent;
  let fixture: ComponentFixture<BptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
