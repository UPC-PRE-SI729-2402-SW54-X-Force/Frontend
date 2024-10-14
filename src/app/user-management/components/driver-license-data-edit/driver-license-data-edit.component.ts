import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {User} from "../../model/user.entity";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {License} from "../../model/license.entity";
import {MatInput, MatInputModule} from "@angular/material/input";
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatOptgroup, MatOption, MatSelect} from "@angular/material/select";
import {group} from "@angular/animations";
import {MatDatepickerModule, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIcon, MatIconModule} from "@angular/material/icon";

interface licenseClass{
  value: string;
  viewValue:string;
}
interface licenseCategoryGroup{
  disabled?: boolean;
  name: string;
  licenseCategory: licenseCategory[];
}
interface licenseCategory{
  value: string;
  viewValue:string;
}

@Component({
  selector: 'app-driver-license-data-edit',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    NgForOf,
    ReactiveFormsModule,
    MatOptgroup,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatDatepickerInput,
    MatIconModule,
    MatInputModule,
    MatHint,
    MatIcon
  ],
  templateUrl: './driver-license-data-edit.component.html',
  styleUrl: './driver-license-data-edit.component.css'
})
export class DriverLicenseDataEditComponent {
  @ViewChild('editLicenseForm', {static: false}) editLicenseForm!: NgForm;
  @Input() user: User;
  @Input() license:License;
  @Input() editLicenseMode: boolean = false;
  @Output() userLicenseUpdated: EventEmitter<User> = new EventEmitter<User>();
  @Output() editCanceled: EventEmitter<any> = new EventEmitter();

  licenseClasses: licenseClass[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
  ];

  categoryControl = new FormControl('');
  licenseCategories: licenseCategoryGroup[] = [
    {
      name: 'A',
      licenseCategory:[
        {value: 'I', viewValue: 'I'},
        {value: 'IIa', viewValue: 'IIa'},
        {value: 'IIb', viewValue: 'IIb'},
        {value: 'IIIa', viewValue: 'IIIa'},
        {value: 'IIIb', viewValue: 'IIIb'},
        {value: 'IIIc', viewValue: 'IIIc'},
      ]
    },{
      name: 'B',
      licenseCategory:[
        {value: 'I', viewValue: 'I'},
        {value: 'IIa', viewValue: 'IIa'},
        {value: 'IIb', viewValue: 'IIb'},
        {value: 'IIc', viewValue: 'IIc'},
      ]
    }
  ];
  constructor() {
    this.user = {} as User;
    this.license = {} as License;
  }

  private resetEditLicense(): void {
    this.user = {} as User;
    this.license = {} as License;
    this.editLicenseMode = false;
    this.editLicenseForm.resetForm();
  }
  onEditLicense() {
    this.editLicenseMode = true;
  }

  onCancelEditLicense() {
    this.editCanceled.emit();
    this.resetEditLicense();
  }

  onEditLicenseSubmit() {
    if (this.editLicenseForm.form.valid) {
      if(this.editLicenseMode){
        this.license.licenseNumber = "Q"+this.license.id;

        const expirationDate = new Date(this.license.expirationDate);
        const formattedExpirationDate = expirationDate.toISOString().split('T')[0];

        const issueDate = new Date(this.license.expirationDate);
        const formattedIssueDate = expirationDate.toISOString().split('T')[0];

        const formattedLicense = {
          id: this.license.id,
          surname: this.license.surname,
          name: this.license.name,
          licenseNumber: this.license.licenseNumber,
          class: this.license.class,
          expirationDate: formattedExpirationDate,
          issueDate: formattedIssueDate,
          category: this.license.category,
          urlImage: this.license.urlImage
        };

        this.user.license = [formattedLicense];
        let emitter: EventEmitter<User> = this.userLicenseUpdated;
        emitter.emit(this.user);
        console.log('Form is valid');
        this.resetEditLicense()
      }
      this.resetEditLicense()
    } else {
      console.log('Form is invalid');
    }
  }

  protected readonly group = group;
}
