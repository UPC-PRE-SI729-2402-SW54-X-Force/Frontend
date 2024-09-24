import {Component, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {MatSidenav} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink,MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DriveNow';

  @ViewChild(MatSidenav, {static: true}) sidenav!: MatSidenav;
  options = [
    {icon:'', path: '/offers', title: 'Offers'},
    {icon:'', path: '/about', title: 'About Us'},
    {icon:'', path: '/community', title: 'Community'},
    {icon:'', path: '/resources', title: 'Resources'},
    {icon:'', path:'/work', title: 'Work With Us'},
    {icon:'', path: '/leasing-info', title: 'Leasing Information'},
    {icon: 'account_circle', path: '/user', title: 'User'},
  ];

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
