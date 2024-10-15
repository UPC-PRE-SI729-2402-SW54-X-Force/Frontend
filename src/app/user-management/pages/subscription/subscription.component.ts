import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    MatCard,
    MatButton
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

}
