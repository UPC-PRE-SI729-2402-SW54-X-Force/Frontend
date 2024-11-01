import {Component, ViewChild} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {MatSidenav} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, MatIcon, NgIf, NgOptimizedImage, NgForOf, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DriveNow';
  showToolbar = true;
  redirect =''

  @ViewChild(MatSidenav, {static: true}) sidenav!: MatSidenav;
  optionsTenant = [
    {icon:'', path: '/offers', title: 'Offers'},
    {icon:'', path: '/about', title: 'About Us'},
    {icon:'', path: '/resources', title: 'Resources'},
    {icon:'', path:'/work', title: 'Work With Us'},
    {icon:'', path: '/leasing-info', title: 'Leasing Information'},
    {icon: 'account_circle', path: '/user', title: 'User'},
  ];

  optionsOwner = [
    {icon:'', path: '/vehicles', title: 'Vehicles'},
    {icon:'', path:'/tenants', title: 'Tenants'},
    {icon:'', path: '/about', title: 'About Us'},
    {icon:'', path: '/resources', title: 'Resources'},
    {icon: 'account_circle', path: '/user', title: 'User'},
  ];


  constructor(translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;

      this.showToolbar = !(currentRoute.includes('login') || currentRoute.includes('register'));
    });
    this.setRedirect();
  }

  private setRedirect(){
    if (this.isTenant)
      this.redirect = '/offers';
    else
      this.redirect = '/vehicles';
  }

  get isTenant(): boolean {
    return localStorage.getItem('userRole') === 'arrendatario';
  }

  get isOwner(): boolean {
    return localStorage.getItem('userRole') === 'dueño';
  }
}
