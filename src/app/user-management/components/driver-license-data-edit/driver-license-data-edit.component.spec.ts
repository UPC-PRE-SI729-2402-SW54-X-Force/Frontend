import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLicenseDataEditComponent } from './driver-license-data-edit.component';

describe('DriverLicenseDataEditComponent', () => {
  let component: DriverLicenseDataEditComponent;
  let fixture: ComponentFixture<DriverLicenseDataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverLicenseDataEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverLicenseDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
