import {Component,} from '@angular/core';
import {DriverLicenseCardComponent} from "../../components/driver-license-card/driver-license-card.component";
import {
  DriverLicenseDataEditComponent
} from "../../components/driver-license-data-edit/driver-license-data-edit.component";
import {Subscription} from "rxjs";
import {License} from "../../model/license.entity";
import {LicenseService} from "../../services/license.service";

@Component({
  selector: 'app-license',
  standalone: true,
  imports: [
    DriverLicenseCardComponent,
    DriverLicenseDataEditComponent
  ],
  templateUrl: './license.component.html',
  styleUrl: './license.component.css'
})
export class LicenseComponent {

  constructor(private licenseService: LicenseService) {
  }

  onUserLicenseUpdated(license: License) {
    this.licenseService.update(license.id, license).subscribe(
      {
        next: () => console.log('License updated successfully')
      })
  }
}
