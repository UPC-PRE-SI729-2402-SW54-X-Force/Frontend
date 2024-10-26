import {Component} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {UsersService} from "../../services/users.service";
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

  constructor(private userService: UsersService, private router: Router) {}

  login() {
    // Intentar con el endpoint de "arrendatarios"
    this.userService.setResourceEndPoint('/users2');
    this.userService.getAll().subscribe((users: any[]) => {
      let user = users.find((u: any) => u.email === this.email && u.password === this.password);

      if (user) {
        console.log('Login exitoso como arrendatario');
        this.router.navigate(['/offers']);
      } else {
        // Intentar con el endpoint de "dueños de vehículos"
        this.userService.setResourceEndPoint('/users1');
        this.userService.getAll().subscribe((users: any[]) => {
          user = users.find((u: any) => u.email === this.email && u.password === this.password);

          if (user) {
            console.log('Login exitoso como dueño de vehículo');
            this.router.navigate(['/offers']);
          } else {
            console.error('Credenciales incorrectas');
            alert('Email o contraseña incorrectos.');
          }
        });
      }
    });
  }

}
