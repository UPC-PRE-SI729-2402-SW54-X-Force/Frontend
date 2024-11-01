import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarFormComponent } from './register-car-form.component';

describe('RegisterCarFormComponent', () => {
  let component: RegisterCarFormComponent;
  let fixture: ComponentFixture<RegisterCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCarFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
