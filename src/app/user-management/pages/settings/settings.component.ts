import {Component, OnInit} from '@angular/core';
import {UserEditComponent} from "../../components/user-edit/user-edit.component";
import {User} from "../../model/user.entity";
import {UsersService} from "../../services/users.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    UserEditComponent
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
    this.subscription = this.userService.getById(1).subscribe((data: User) => {
      this.userData = data;
    });
  }

  private updateUserName(): void {
    let userToUpdate: User = this.userData;
    this.userService.update(1, userToUpdate)
      .subscribe((response: any) => {
        this.userData = response;
      });
  }

  onUserNameUpdated(user: User) {
    this.userData.name = user.name;
    this.updateUserName();
  }
}
