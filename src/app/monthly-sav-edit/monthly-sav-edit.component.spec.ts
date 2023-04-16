import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySavEditComponent } from './monthly-sav-edit.component';

describe('MonthlySavEditComponent', () => {
  let component: MonthlySavEditComponent;
  let fixture: ComponentFixture<MonthlySavEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlySavEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlySavEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
