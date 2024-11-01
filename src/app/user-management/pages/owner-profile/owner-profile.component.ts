import {Component, OnInit} from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatList, MatListItem, MatListItemTitle} from "@angular/material/list";
import {RouterLink} from "@angular/router";


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
export class OwnerProfileComponent  {



}
