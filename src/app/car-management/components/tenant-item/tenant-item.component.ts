import {Component, Input} from '@angular/core';
import {User} from "../../../user-management/model/user.entity";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardLgImage,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-tenant-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardLgImage,
    MatCardTitle,
    MatCardTitleGroup,
    NgOptimizedImage
  ],
  templateUrl: './tenant-item.component.html',
  styleUrl: './tenant-item.component.css'
})
export class TenantItemComponent {
  @Input() tenant!: User;
}
