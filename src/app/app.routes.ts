import { Routes } from '@angular/router';
import {AboutComponent} from "./about-us/about/about.component";
import {CommunityComponent} from "./public/pages/community/community.component";
import {ResourcesComponent} from "./resources/pages/resources/resources.component";
import {WorkComponent} from "./public/pages/work/work.component";
import {LeasingComponent} from "./public/pages/leasing/leasing.component";
import {OffersComponent} from "./public/pages/offers/offers.component";
import {UserComponent} from "./user-management/pages/user/user.component";
import {SettingsComponent} from "./user-management/pages/edit-data/settings.component";
import {FaqComponent} from "./public/pages/faq/faq.component";
import {InsuranceComponent} from "./user-management/pages/insurance/insurance.component";
import {LicenseComponent} from "./user-management/pages/license/license.component";
import {SubscriptionComponent} from "./user-management/pages/subscription/subscription.component";
import {SupportComponent} from "./public/pages/support/support.component";
import {LoginComponent} from "./user-management/pages/login/login.component";
import {RegisterComponent} from "./user-management/pages/register/register.component";
import {CarListComponent} from "./car-management/pages/car-list/car-list.component";
import {TenantListComponent} from "./car-management/pages/tenant-list/tenant-list.component";

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'vehicles', component: CarListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tenants', component: TenantListComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'work', component: WorkComponent},
  {path: 'leasing-info', component: LeasingComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/edit-data', component: SettingsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'user/insurance', component: InsuranceComponent},
  {path: 'user/license', component: LicenseComponent},
  {path: 'user/subscription', component: SubscriptionComponent},
  {path: 'support', component: SupportComponent}
];
