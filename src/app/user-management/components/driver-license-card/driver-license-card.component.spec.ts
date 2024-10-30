import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLicenseCardComponent } from './driver-license-card.component';

describe('DriverLicenseCardComponent', () => {
  let component: DriverLicenseCardComponent;
  let fixture: ComponentFixture<DriverLicenseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverLicenseCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverLicenseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
