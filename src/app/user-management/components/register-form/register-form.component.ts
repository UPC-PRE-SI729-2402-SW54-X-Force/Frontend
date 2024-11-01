import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../services/user.service";
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
  userType: string = '';

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) {
  }

  onRegister() {

    const newUser: { password: string; address: string; name: string; id: number; email: string; userType: string, pfp: string, joined_at: string, age:number } = {
      id: 0,
      name: this.name,
      email: this.email,
      address: this.address,
      password: this.password,
      userType: this.userType,
      pfp: 'https://miro.medium.com/v2/resize:fit:1024/1*BEY7PZ3z0p6hxKLjYRdyvw.png',
      joined_at:
        new Date().toISOString(),
      age: 45
    };

    this.userService.create(newUser).subscribe({

      next: (response: User) => {
        console.log('Registro exitoso', response);

        this.snackBar.open('User registered successfully', 'Close', {
          duration: 3500
        });

        this.router.navigate(['login']);
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Error registering user.', 'Close', {
          duration: 3500
        });
      }
    });
  }
}
