import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    TranslateModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent { }
