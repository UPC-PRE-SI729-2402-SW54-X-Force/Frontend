import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Reservation List</h1>`,
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {}
