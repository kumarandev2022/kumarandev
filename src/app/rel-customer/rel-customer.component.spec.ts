import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelCustomerComponent } from './rel-customer.component';

describe('RelCustomerComponent', () => {
  let component: RelCustomerComponent;
  let fixture: ComponentFixture<RelCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
