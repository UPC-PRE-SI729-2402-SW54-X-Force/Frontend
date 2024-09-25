import { Component } from '@angular/core';
import {DriverLicenseCardComponent} from "../../components/driver-license-card/driver-license-card.component";

@Component({
  selector: 'app-license',
  standalone: true,
  imports: [
    DriverLicenseCardComponent
  ],
  templateUrl: './license.component.html',
  styleUrl: './license.component.css'
})
export class LicenseComponent {

}
