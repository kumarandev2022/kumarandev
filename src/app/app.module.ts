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
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DxDataGridModule,
    NgMultiSelectDropDownModule 
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
