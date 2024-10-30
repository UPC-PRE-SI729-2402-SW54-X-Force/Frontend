import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.entity";
import {Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";
import {MatCard, MatCardContent} from "@angular/material/card";
import {DatePipe, NgForOf} from "@angular/common";

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
export class DriverLicenseCardComponent implements OnInit{
  user: User;
  subscription!: Subscription;
  constructor(private userService: UsersService) {
    this.user = new User();
  }
  ngOnInit(): void {
    const userId = Number(localStorage.getItem('userId'));
    this.subscription = this.getUserById(userId);
  }

  private getUserById(id : number){
    return this.userService.getById(id).subscribe((data: User) =>{
      this.user = data;
    });
  }
}
