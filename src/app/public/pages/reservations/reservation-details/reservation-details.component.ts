import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-details',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Reservation Details</h1>`,
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent {}
