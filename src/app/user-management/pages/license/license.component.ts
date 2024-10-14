import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DriverLicenseCardComponent } from "../../components/driver-license-card/driver-license-card.component";
import { DriverLicenseDataEditComponent } from "../../components/driver-license-data-edit/driver-license-data-edit.component";
import { Subscription } from "rxjs";
import { User } from "../../model/user.entity";
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';

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
export class LicenseComponent implements OnInit {

  userData: User;
  subscription!: Subscription;

  constructor(private userService: UsersService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    this.userData = new User();
  }

  ngOnInit(): void {
    this.subscription = this.userService.getById(this.userService.userId).subscribe((data: User) => {
      this.userData = data;
      this.changeDetectorRef.detectChanges(); // Trigger change detection
    });
  }

  private updateUser(): void {
    let userToUpdate: User = this.userData;
    this.userService.update(userToUpdate.id, userToUpdate)
      .subscribe((response: any) => {
        this.userData = response;
        this.changeDetectorRef.detectChanges(); // Trigger change detection
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/').then(() => {
          this.router.navigateByUrl(currentUrl).then(() => { });
        }); // Force route reload
      });
  }

  onUserLicenseUpdated(user: User) {
    this.userData.license = user.license;
    this.updateUser();
  }
}
