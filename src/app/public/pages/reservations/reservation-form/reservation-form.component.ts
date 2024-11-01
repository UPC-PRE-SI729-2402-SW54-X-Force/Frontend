import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { CommonModule } from '@angular/common';
import { Reservation } from '../model/reservation.model';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  reservation: Reservation = {
    userId: 0,
    offerId: 0,
    reservationDate: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    status: 'Pending',
    cost: 0.0
  };

  constructor(private reservationService: ReservationService) {}

  onSubmit() {
    this.reservationService.createReservation(this.reservation).subscribe({
      next: (response) => console.log('Reservation created:', response),
      error: (err) => console.error('Error creating reservation:', err)
    });
  }
}

