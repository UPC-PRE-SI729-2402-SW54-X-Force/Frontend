import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantItemComponent } from './tenant-item.component';

describe('TenantItemComponent', () => {
  let component: TenantItemComponent;
  let fixture: ComponentFixture<TenantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
