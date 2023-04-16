import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySavViewComponent } from './monthly-sav-view.component';

describe('MonthlySavViewComponent', () => {
  let component: MonthlySavViewComponent;
  let fixture: ComponentFixture<MonthlySavViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySavViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlySavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
