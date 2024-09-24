import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {CommunityComponent} from "./public/pages/community/community.component";
import {ResourcesComponent} from "./public/pages/resources/resources.component";
import {WorkComponent} from "./public/pages/work/work.component";
import {LeasingComponent} from "./public/pages/leasing/leasing.component";
import {OffersComponent} from "./public/pages/offers/offers.component";
import {UserComponent} from "./user-management/pages/user/user.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'work', component: WorkComponent},
  {path: 'leasing-info', component: LeasingComponent},
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
