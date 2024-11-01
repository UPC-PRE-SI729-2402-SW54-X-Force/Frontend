import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../model/reservation.model';

@Component({
  selector: 'app-reservation-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  @Input() reservationId!: number;
  reservation!: Reservation;

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getReservationDetails();
  }

  getReservationDetails() {
    this.reservationService.getReservationById(this.reservationId).subscribe({
      next: (data) => (this.reservation = data),
      error: (err) => console.error('Error fetching reservation details:', err)
    });
  }

  cancelReservation() {
    if (this.reservation.id) {
      this.reservationService.cancelReservation(this.reservation.id).subscribe({
        next: () => {
          this.reservation.status = 'Cancelled';
          console.log('Reservation cancelled');
        },
        error: (err) => console.error('Error cancelling reservation:', err)
      });
    }
  }
}
