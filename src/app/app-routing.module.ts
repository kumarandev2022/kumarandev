import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CreateSavingComponent } from './create-saving/create-saving.component';
import { CreateInterestComponent } from './create-interest/create-interest.component';
import { CustomerSavingsComponent } from './customer-savings/customer-savings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { MonthlySavingsComponent } from './monthly-savings/monthly-savings.component';
import { ClubRegistrationComponent } from './club-registration/club-registration.component';
import { RelCustomerComponent } from './rel-customer/rel-customer.component';
import { LocalStorageService } from './_services/local-storage.service';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoanReqViewComponent } from './loan-req-view/loan-req-view.component';
import { LoanHomeComponent } from './loan-home/loan-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'createsaving', component: CreateSavingComponent },
  { path: 'createinterest', component: CreateInterestComponent },
  { path: 'savings-share', component: CustomerSavingsComponent },
  { path: 'user-register',component: UserProfileComponent},
  { path:'loan-request', component: LoanRequestComponent},
  { path:'m-savings', component: MonthlySavingsComponent},
  { path:'change-password', component: RegisterComponent},
  { path:'clubs', component: ClubRegistrationComponent},
  { path:'customers', component: RelCustomerComponent},
  { path:'loan-view', component: LoanReqViewComponent},
  { path:'loan-home', component: LoanHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LocalStorageService]
})
export class AppRoutingModule { }