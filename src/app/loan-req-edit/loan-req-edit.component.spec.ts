import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReqEditComponent } from './loan-req-edit.component';

describe('LoanReqEditComponent', () => {
  let component: LoanReqEditComponent;
  let fixture: ComponentFixture<LoanReqEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanReqEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanReqEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
