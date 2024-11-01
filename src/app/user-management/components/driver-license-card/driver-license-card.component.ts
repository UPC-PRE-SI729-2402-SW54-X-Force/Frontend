import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {DatePipe, NgForOf} from "@angular/common";
import {License} from "../../model/license.entity";
import {LicenseService} from "../../services/license.service";

@Component({
  selector: 'app-driver-license-card',
  standalone: true,
  imports: [
    MatCard,
    DatePipe,
    MatCardContent,
    NgForOf
  ],
  templateUrl: './driver-license-card.component.html',
  styleUrl: './driver-license-card.component.css'
})
export class DriverLicenseCardComponent implements OnInit {
  license: License = {} as License;

  constructor(private licenseService: LicenseService) {
  }

  ngOnInit(): void {
    const userId: number = Number(localStorage.getItem('userId'));
    this.getLicenseByUserId(userId);
  }

  private getLicenseByUserId(id: number): void {
    this.licenseService.getLicenseByUserId(id).subscribe({
      next: (license: License): void => {
        this.license = license;
      },
      error: (error: any): void => {
        console.error(error);
      }
    });
  }
}
