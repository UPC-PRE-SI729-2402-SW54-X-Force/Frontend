import {Component, ViewChild} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {MatSidenav} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, MatIcon, NgIf, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DriveNow';
  showToolbar = true;

  @ViewChild(MatSidenav, {static: true}) sidenav!: MatSidenav;
  options = [
    {icon:'', path: '/offers', title: 'Offers'},
    {icon:'', path: '/about', title: 'About Us'},
    {icon:'', path: '/resources', title: 'Resources'},
    {icon:'', path:'/work', title: 'Work With Us'},
    {icon:'', path: '/leasing-info', title: 'Leasing Information'},
    {icon: 'account_circle', path: '/user', title: 'User'},
  ];

  constructor(translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
    // Detectar cambios en la ruta actual
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      // Mostrar el toolbar solo si la ruta no es 'login' o 'register'
      this.showToolbar = !(currentRoute.includes('login') || currentRoute.includes('register'));
    });
  }
}
