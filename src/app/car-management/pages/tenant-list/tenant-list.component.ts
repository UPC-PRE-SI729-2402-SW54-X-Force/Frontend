import {Component, OnInit} from '@angular/core';
import {User} from "../../../user-management/model/user.entity";
import {UserService} from "../../../user-management/services/user.service";
import {CarItemComponent} from "../../components/car-item/car-item.component";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {TenantItemComponent} from "../../components/tenant-item/tenant-item.component";

@Component({
  selector: 'app-tenant-list',
  standalone: true,
  imports: [
    CarItemComponent,
    MatButton,
    NgForOf,
    TenantItemComponent
  ],
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.css'
})
export class TenantListComponent implements OnInit {

  tenants!: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadTenants();
  }

  private loadTenants(): void {
    this.userService.getAll().subscribe((data: User[]) => (this.tenants = data));
  }
}
