import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Offer } from './model/offer.model';
import { DestinationMapComponent } from '../maps/destination-map.component';

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
    MatIconModule,
    DestinationMapComponent
  ],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit, AfterViewInit {
  offers: Offer[] = [];
  filteredOffers: Offer[] = [];
  destination: string = '';
  date: Date | null = null;
  modelFilter: string = '';
  insuranceFilter: boolean = false;
  excludePremiumFilter: boolean = false;

  @ViewChild('picker', { static: true }) datepicker!: MatDatepicker<any>;

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) {} // Añade Router en el constructor

  ngOnInit(): void {
    this.getOffers();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.datepicker.open();
    }, 0);
  }

  getOffers(): void {
    this.http.get<Offer[]>('http://localhost:3000/offers').subscribe((data: Offer[]) => {
      this.offers = data;
      this.applyFilters();
    });
  }

  openMap(): void {
    const dialogRef = this.dialog.open(DestinationMapComponent, {
      width: '80vw',
      maxWidth: '600px',
      height: '80vh',
    });

    dialogRef.afterOpened().subscribe(() => {
      setTimeout(() => {
        const mapComponent = dialogRef.componentInstance as DestinationMapComponent;
        mapComponent.map.invalidateSize();
      }, 100);
    });

    dialogRef.componentInstance.locationSelected.subscribe((location: string) => {
      this.destination = location;
      dialogRef.close();
      this.applyFilters();
    });
  }

  onDestinationChange(value: string) {
    this.destination = value;
    this.applyFilters();
  }

  onModelFilterChange(value: string) {
    this.modelFilter = value;
    this.applyFilters();
  }

  onDateChange(value: Date | null) {
    this.date = value;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredOffers = this.offers.filter(offer =>
      (this.destination ? offer.destination.toLowerCase().includes(this.destination.toLowerCase()) : true) &&
      (this.modelFilter ? offer.model.toLowerCase().includes(this.modelFilter.toLowerCase()) : true) &&
      (this.date ? new Date(offer.date).toDateString() === this.date.toDateString() : true) &&
      (!this.insuranceFilter || offer.insurance === 'with insurance') &&
      (!this.excludePremiumFilter || offer.premium !== 'premium')
    );
  }


  navigateToReservationForm(offer: Offer): void {
    this.router.navigate(['/reservations/new'], { state: { offer } });
  }
}
