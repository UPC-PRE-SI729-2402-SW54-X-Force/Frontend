import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormField,
    MatButton,
    MatInput,
    MatLabel
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  validateUser() {

  }
}
