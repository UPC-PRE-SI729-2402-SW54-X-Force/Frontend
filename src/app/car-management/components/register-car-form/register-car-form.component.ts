import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vehicle} from "../../model/vehicle.entity";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatDialogContent, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register-car-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatDialogContent
  ],
  templateUrl: './register-car-form.component.html',
  styleUrl: './register-car-form.component.css'
})
export class RegisterCarFormComponent implements OnInit{
  @Input() vehicle: Vehicle = new Vehicle();

  constructor(public dialogRef: MatDialogRef<RegisterCarFormComponent>) {
  }

  ngOnInit() {
    this.vehicle.userId = Number(localStorage.getItem('userId'));
  }

  onSubmit(): void {
    this.dialogRef.close(this.vehicle);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
