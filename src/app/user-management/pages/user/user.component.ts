import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../model/user.entity";
import {Subscription} from "rxjs";
import {MatDividerModule} from "@angular/material/divider";
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatDividerModule,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    RouterLink,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  user: User;
  subscription!: Subscription;
  constructor(private userService: UsersService) {
    this.user = new User();
  }
  ngOnInit(): void {
    this.subscription = this.userService.getById(1).subscribe((data: User) => {
      this.user = data;
    });
  }

}
