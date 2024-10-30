import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {User} from "../../model/user.entity";
import {FormsModule, NgForm} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-data-edit',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatButton,
    NgIf
  ],
  templateUrl: './user-data-edit.component.html',
  styleUrl: './user-data-edit.component.css'
})
export class UserDataEditComponent {
  // Attributes
  @ViewChild('changeNameForm', {static: false}) changeNameForm!: NgForm;
  @ViewChild('changeEmailForm', {static: false}) changeEmailForm!: NgForm;
  @ViewChild('changePfpForm', {static: false}) changePfpForm!: NgForm;
  @ViewChild('changeAddressForm', {static: false}) changeAddressForm!: NgForm;

  @Input() editChangeNameMode: boolean = false;
  @Input() editChangeEmailMode: boolean = false;
  @Input() editChangeAddressMode: boolean = false;
  @Input() editChangePfpMode: boolean = false;

  @Input() user: User;

  @Output() userNameUpdated: EventEmitter<User> = new EventEmitter<User>();
  @Output() userEmailUpdated: EventEmitter<User> = new EventEmitter<User>();
  @Output() userAddressUpdated: EventEmitter<User> = new EventEmitter<User>();
  @Output() userPfpUpdated: EventEmitter<User> = new EventEmitter<User>();
  @Output() editCanceled: EventEmitter<any> = new EventEmitter();

  // Constructor
  constructor() {
    this.user = {} as User;
  }

  // Private Methods
  private resetEditChangeNameState(): void {
    this.user = {} as User;
    this.editChangeNameMode = false;
    this.changeNameForm.resetForm();
  }

  private resetEditChangeEmailState(): void {
    this.user = {} as User;
    this.editChangeEmailMode = false;
    this.changeEmailForm.resetForm();
  }

  private resetEditChangeAddressState(): void {
    this.user = {} as User;
    this.editChangeAddressMode = false;
    this.changeAddressForm.resetForm();
  }

  private resetEditChangePfpState(): void {
    this.user = {} as User;
    this.editChangePfpMode = false;
    this.changePfpForm.resetForm();
  }

  onChangeNameSubmit(): void {
    if (this.changeNameForm.form.valid) {
      if(this.editChangeNameMode){
        let emitter: EventEmitter<User> = this.userNameUpdated;
        emitter.emit(this.user);
        console.log('User updated');
        this.resetEditChangeNameState();
      }
      this.resetEditChangeNameState();
    } else {
      console.error('Invalid data in form');
    }
  }
  onChangeEmailSubmit(): void {
    if (this.changeEmailForm.form.valid) {
      if(this.editChangeEmailMode){
        let emitter: EventEmitter<User> = this.userEmailUpdated;
        emitter.emit(this.user);
        console.log('User updated');
        this.resetEditChangeEmailState();
      }
      this.resetEditChangeEmailState();
    } else {
      console.error('Invalid data in form');
    }
  }

  onChangeAddressSubmit(): void {
    if (this.changeAddressForm.form.valid) {
      if(this.editChangeAddressMode){
        let emitter: EventEmitter<User> = this.userAddressUpdated;
        emitter.emit(this.user);
        console.log('User updated');
        this.resetEditChangeAddressState();
      }
      this.resetEditChangeAddressState();
    } else {
      console.error('Invalid data in form');
    }
  }

  onChangePfpSubmit(): void {
    if (this.changePfpForm.form.valid) {
      if (this.editChangePfpMode) {
        let emitter: EventEmitter<User> = this.userPfpUpdated;
        emitter.emit(this.user);
        console.log('User updated');
        this.resetEditChangePfpState();
      }
      this.resetEditChangePfpState();
    } else {
      console.error('Invalid data in form');
    }
  }
  onChangeNameCancel(): void {
    this.editCanceled.emit();
    this.resetEditChangeNameState();
  }

  onChangeName():void {
    this.editChangeNameMode = true;
  }

  onChangeEmailCancel(): void {
    this.editCanceled.emit();
    this.resetEditChangeEmailState();
  }

  onChangeEmail():void {
    this.editChangeEmailMode = true;
  }

  onChangeAddressCancel(): void {
    this.editCanceled.emit();
    this.resetEditChangeAddressState();
  }

  onChangeAddress():void {
    this.editChangeAddressMode = true;
  }

  onChangePfpCancel(): void {
    this.editCanceled.emit();
    this.resetEditChangePfpState();
  }

  onChangePfp():void {
    this.editChangePfpMode = true;
  }

}
