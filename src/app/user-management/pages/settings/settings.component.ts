import {Component, OnInit} from '@angular/core';
import {UserDataEditComponent} from "../../components/user-data-edit/user-data-edit.component";
import {User} from "../../model/user.entity";
import {UsersService} from "../../services/users.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    UserDataEditComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit{
  //Attributes
  userData: User;
  subscription!: Subscription;

  constructor(private userService: UsersService) {
    this.userData = new User();
  }

  ngOnInit(): void {
    this.subscription = this.userService.getById(this.userService.userId).subscribe((data: User) => {
      this.userData = data;
    });
  }

  private updateUser(): void {
    let userToUpdate: User = this.userData;
    this.userService.update(userToUpdate.id, userToUpdate)
      .subscribe((response: any) => {
        this.userData = response;
      });
  }

  onUserNameUpdated(user: User) {
    this.userData.name = user.name;
    this.updateUser();
  }

  onUserEmailUpdated(user: User) {
    this.userData.email = user.email;
    this.updateUser();
  }

  onUserAddressUpdated(user: User) {
    this.userData.address = user.address;
    this.updateUser();
  }

  onUserPfpUpdated(user: User) {
    this.userData.pfp = user.pfp;
    this.updateUser();
  }
}
