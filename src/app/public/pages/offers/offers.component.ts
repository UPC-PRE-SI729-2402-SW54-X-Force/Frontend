import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Offer } from './offer.model';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit, AfterViewInit {
  offers: Offer[] = [];
  destination: string = '';
  date: Date | null = null;

  @ViewChild('picker', { static: true }) datepicker!: MatDatepicker<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getOffers();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.datepicker.open();
    }, 0);
  }

  onDestinationChange(value: string) {
    this.destination = value;
  }

  getOffers(): void {
    this.http.get<Offer[]>('http://localhost:3000/offers').subscribe((data: Offer[]) => {
      this.offers = data;
    });
  }
}
