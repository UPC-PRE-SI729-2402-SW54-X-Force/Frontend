import {Component, OnInit} from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatList, MatListItem, MatListItemTitle} from "@angular/material/list";
import {RouterLink} from "@angular/router";
import {Owner} from "../../model/owner.entity";
import {OwnerService} from "../../services/owner.service";

@Component({
  selector: 'app-owner-profile',
  standalone: true,
  imports: [
    MatDivider,
    MatList,
    MatListItem,
    MatListItemTitle,
    RouterLink
  ],
  templateUrl: './owner-profile.component.html',
  styleUrl: './owner-profile.component.css'
})
export class OwnerProfileComponent implements OnInit {

  owner: Owner;

  constructor(private ownerService: OwnerService) {
    this.owner = new Owner();
    this.ownerService.setResourceEndPoint('/owners')
  }

  ngOnInit(): void {
    const ownerId = Number(localStorage.getItem('userId'));
    this.getOwnerById(ownerId);
  }

  private getOwnerById(id: number) {
    return this.ownerService.getById(id).subscribe((data: Owner) => {
      this.owner = data;
    });
  }

}