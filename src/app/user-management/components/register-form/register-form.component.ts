import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {User} from "../../model/user.entity";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatCheckbox,
    MatSelect,
    MatOption,
    FormsModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  password: string = '';
  role: string = '';

  constructor(private userService: UsersService, private snackBar: MatSnackBar, private router: Router) {
  }

  onRegister() {
    if (this.role === 'arrendatario')
      this.userService.setResourceEndPoint('/users2');
    else
      this.userService.setResourceEndPoint('/users1');


    const newUser: { password: string; address: string; name: string; id: number; email: string } = {
      id: 0,
      name: this.name,
      email: this.email,
      address: this.address,
      password: this.password
    };

    this.userService.create(newUser).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);

        this.snackBar.open('User registered successfully', 'Close', {
          duration: 3500
        });

        this.router.navigate(['login']);
      },
      error: (error) => {
        console.log(error);
      }
    });


  }
}
