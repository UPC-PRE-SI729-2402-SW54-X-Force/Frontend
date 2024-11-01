import {Component, Input} from '@angular/core';
import {Vehicle} from "../../model/vehicle.entity";
import {
  MatCard,
  MatCardContent,
  MatCardHeader, MatCardLgImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-car-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    NgOptimizedImage,
    MatCardLgImage,
    TranslateModule
  ],
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.css'
})
export class CarItemComponent {
  @Input() vehicle!: Vehicle;
}
