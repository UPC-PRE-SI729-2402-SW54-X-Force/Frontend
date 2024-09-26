import {Component, OnInit} from '@angular/core';
import {Resource} from "../../model/resource.entity";
import {Subscription} from "rxjs";
import {ResourcesService} from "../../services/resources.service";
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSmImage,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatButton, MatFabButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    MatCardContent,
    MatFabButton,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardTitleGroup,
    NgOptimizedImage,
    MatButton,
    MatCardSmImage,
    MatCardActions
  ],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit {

  resources: Resource[];
  subscription!: Subscription;

  constructor(private resourcesService: ResourcesService) {
    // @ts-ignore
    this.resources = [];
  }

  ngOnInit(): void {
    this.subscription = this.resourcesService.getResources().subscribe((data: Resource[]) => {
      this.resources = data;
    });
  }
}
