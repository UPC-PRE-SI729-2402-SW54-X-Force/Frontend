import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../../model/vehicle.entity";
import {CarService} from "../../services/car.service";
import {CarItemComponent} from "../../components/car-item/car-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {RegisterCarFormComponent} from "../../components/register-car-form/register-car-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CarItemComponent,
    NgForOf,
    MatButton,
    RegisterCarFormComponent,
    NgIf
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {

  vehicles: Vehicle[] = [];


  constructor(private carService: CarService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    const userId: number = Number(localStorage.getItem('userId'));
    this.carService.getVehiclesByUserId(userId).subscribe({
      next: (data: Vehicle[]) => {
        this.vehicles = data;
      },
      error: (error) => {
        console.error('Error al obtener los vehículos:', error);
      }
    });
  }

  openAddVehicleDialog(): void {
    const dialogRef = this.dialog.open(RegisterCarFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: Vehicle | undefined) => {
      if (result) {
        this.carService.create(result).subscribe(() => {
          this.loadVehicles(); // Recarga la lista de vehículos
        });
      }
    });
  }

}
