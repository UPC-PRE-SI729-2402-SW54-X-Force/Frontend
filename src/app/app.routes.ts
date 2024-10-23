import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./about-us/about/about.component";
import {CommunityComponent} from "./public/pages/community/community.component";
import {ResourcesComponent} from "./resources/pages/resources/resources.component";
import {WorkComponent} from "./public/pages/work/work.component";
import {LeasingComponent} from "./public/pages/leasing/leasing.component";
import {OffersComponent} from "./public/pages/offers/offers.component";
import {UserComponent} from "./user-management/pages/user/user.component";
import {SettingsComponent} from "./user-management/pages/settings/settings.component";
import {FaqComponent} from "./public/pages/faq/faq.component";
import {InsuranceComponent} from "./user-management/pages/insurance/insurance.component";
import {LicenseComponent} from "./user-management/pages/license/license.component";
import {RewardsComponent} from "./user-management/pages/rewards/rewards.component";
import {SubscriptionComponent} from "./user-management/pages/subscription/subscription.component";
import {SupportComponent} from "./public/pages/support/support.component";
import {LoginComponent} from "./user-management/pages/login/login.component";

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'work', component: WorkComponent},
  {path: 'leasing-info', component: LeasingComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/settings', component: SettingsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'user/insurance', component: InsuranceComponent},
  {path: 'user/license', component: LicenseComponent},
  {path: 'user/rewards', component: RewardsComponent},
  {path: 'user/subscription', component: SubscriptionComponent},
  {path: 'support', component: SupportComponent}
];
