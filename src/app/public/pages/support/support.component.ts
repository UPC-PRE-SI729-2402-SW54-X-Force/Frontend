import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatFormFieldModule,
    MatButton
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
