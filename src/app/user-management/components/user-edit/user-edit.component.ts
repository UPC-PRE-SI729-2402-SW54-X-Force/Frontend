import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {User} from "../../model/user.entity";
import {FormsModule, NgForm} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatButton
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  // Attributes
  @ViewChild('userForm', {static: false}) userForm!: NgForm;
  @Input() editMode: boolean = false;
  @Input() user: User;
  @Output() userNameUpdated: EventEmitter<User> = new EventEmitter<User>();
  @Output() editCanceled: EventEmitter<any> = new EventEmitter();

  // Constructor
  constructor() {
    this.user = {} as User;
  }

  // Private Methods
  private resetEditState(): void {
    this.user = {} as User;
    this.editMode = false;
    this.userForm.resetForm();
  }

  onSubmit(): void {
    if (this.userForm.form.valid) {
      if(this.editMode){
        let emitter: EventEmitter<User> = this.userNameUpdated;
        emitter.emit(this.user);
        console.log('User updated');
        this.resetEditState();
      }
      this.resetEditState();
    } else {
      console.error('Invalid data in form');
    }
  }
  onCancel(): void {
    this.editCanceled.emit();
    this.resetEditState();
  }

  editName():void {
    this.editMode = true;
  }
}
