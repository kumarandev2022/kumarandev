import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReqViewComponent } from './loan-req-view.component';

describe('LoanReqViewComponent', () => {
  let component: LoanReqViewComponent;
  let fixture: ComponentFixture<LoanReqViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanReqViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanReqViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
