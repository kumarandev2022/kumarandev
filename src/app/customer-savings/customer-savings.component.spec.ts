import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSavingsComponent } from './customer-savings.component';

describe('CustomerSavingsComponent', () => {
  let component: CustomerSavingsComponent;
  let fixture: ComponentFixture<CustomerSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSavingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
