import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CreateSavingComponent } from './create-saving/create-saving.component';
import { CreateInterestComponent } from './create-interest/create-interest.component';
import { DxDataGridModule } from 'devextreme-angular';
import { CustomerSavingsComponent } from './customer-savings/customer-savings.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { MonthlySavingsComponent } from './monthly-savings/monthly-savings.component';
import { ClubRegistrationComponent } from './club-registration/club-registration.component';
import { RelCustomerComponent } from './rel-customer/rel-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoanReqViewComponent } from './loan-req-view/loan-req-view.component';
import { LoanReqEditComponent } from './loan-req-edit/loan-req-edit.component';
import { MonthlySavViewComponent } from './monthly-sav-view/monthly-sav-view.component';
import { LoadingComponent } from './loading/loading.component';
import { MonthlySavEditComponent } from './monthly-sav-edit/monthly-sav-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { LoanHomeComponent } from './loan-home/loan-home.component';
import { SavingsHomeComponent } from './savings-home/savings-home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    CreateSavingComponent,
    CreateInterestComponent,
    CustomerSavingsComponent,
    UserProfileComponent,
    LoanRequestComponent,
    MonthlySavingsComponent,
    ClubRegistrationComponent,
    RelCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    LogoutComponent,
    HomepageComponent,
    LoanReqViewComponent,
    LoanReqEditComponent,
    MonthlySavViewComponent,
    LoadingComponent,
    MonthlySavEditComponent,
    LoanHomeComponent,
    SavingsHomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DxDataGridModule,
    NgMultiSelectDropDownModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
