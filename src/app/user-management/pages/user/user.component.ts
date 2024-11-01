import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
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

  constructor(private userService: UserService) {
    this.user = new User();

  }
  ngOnInit(): void {
    const userId = Number(localStorage.getItem('userId'));
    this.getUserById(userId);
  }

  private getUserById(id:number){
    return this.userService.getById(id).subscribe((data: User) =>{
      this.user = data;
    })
  }

}
