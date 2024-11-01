import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<h1>Reservation Form</h1>`,
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {}
