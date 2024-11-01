import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../model/reservation.model';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getReservations().subscribe({
      next: (data) => (this.reservations = data),
      error: (err) => console.error('Error loading reservations:', err)
    });
  }

  viewDetails(id: number) {
    // Logic to navigate or open details view
    console.log('View details for reservation ID:', id);
  }
}
