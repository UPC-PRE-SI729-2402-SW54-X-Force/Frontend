import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {License} from "../../model/license.entity";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatOptgroup, MatOption, MatSelect} from "@angular/material/select";
import {group} from "@angular/animations";
import {MatDatepickerInput, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

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
    MatIcon,
    TranslateModule
  ],
  templateUrl: './driver-license-data-edit.component.html',
  styleUrl: './driver-license-data-edit.component.css'
})
export class DriverLicenseDataEditComponent {
  @ViewChild('editLicenseForm', {static: false}) editLicenseForm!: NgForm;
  @Input() license:License;
  @Input() editLicenseMode: boolean = false;
  @Output() userLicenseUpdated: EventEmitter<License> = new EventEmitter<License>();
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
    this.license = {} as License;
  }

  private resetEditLicense():void {
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
        const formattedIssueDate = issueDate.toISOString().split('T')[0];

        this.license = {
          id: this.license.id,
          userId: Number(localStorage.getItem('userId')),
          name: this.license.name,
          surname: this.license.surname,
          licenseNumber: this.license.licenseNumber,
          licenseClass: this.license.licenseClass,
          expirationDate: formattedExpirationDate,
          issueDate: formattedIssueDate,
          licenseCategory: this.license.licenseCategory,
          licenseUrlImage: this.license.licenseUrlImage
        };
        let emitter: EventEmitter<License> = this.userLicenseUpdated;
        emitter.emit(this.license);
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
