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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'createsaving', component: CreateSavingComponent },
  { path: 'createinterest', component: CreateInterestComponent },
  { path: 'savings-share', component: CustomerSavingsComponent },
  {path: 'user-register',component: UserProfileComponent},
  {path:'loan-request', component: LoanRequestComponent},
  {path:'m-savings', component: MonthlySavingsComponent},
  {path:'change-password', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }