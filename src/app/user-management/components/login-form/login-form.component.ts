import {Component} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormsModule} from "@angular/forms";
import {User} from "../../model/user.entity";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormField,
    MatButton,
    MatInput,
    MatLabel,
    RouterLink,
    FormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {
  }

  login() {

    this.userService.getAll().subscribe((users: User[]): void => {
      let user: User | undefined = users.find((u: User): boolean => u.email === this.email && u.password === this.password);

      if (user) {
        localStorage.setItem('userId', user.id.toString());
        localStorage.setItem('userRole', user.userType);
        if (user.userType === 'arrendatario')
          this.router.navigate(['/offers']);
        else
          this.router.navigate(['/vehicles']);
      } else {
        console.error('Credenciales incorrectas');
        alert('Email o contraseña incorrectos.');
      }
    });
  }
}






