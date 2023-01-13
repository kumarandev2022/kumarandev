import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySavingsComponent } from './monthly-savings.component';

describe('MonthlySavingsComponent', () => {
  let component: MonthlySavingsComponent;
  let fixture: ComponentFixture<MonthlySavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySavingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlySavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
