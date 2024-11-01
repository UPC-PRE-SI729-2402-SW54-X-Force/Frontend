import {Component, OnInit} from '@angular/core';
import {UserDataEditComponent} from "../../components/user-data-edit/user-data-edit.component";
import {User} from "../../model/user.entity";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-edit-data',
  standalone: true,
  imports: [
    UserDataEditComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  userData: User;


  constructor(private userService: UserService) {
    this.userData = new User();
  }

  ngOnInit(): void {
    const userId = Number(localStorage.getItem('userId'));
    this.getUserById(userId);
  }

  private getUserById(id: number) {
    this.userService.getById(id).subscribe((data: User) => {
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
