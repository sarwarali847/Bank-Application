import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { DepositListComponent } from './deposit-list/deposit-list.component';
import { WithdrawListComponent } from './withdraw-list/withdraw-list.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { SortbynameComponent } from './sortbyname/sortbyname.component';
import { SortbydobComponent } from './sortbydob/sortbydob.component';
import { SortbyemailComponent } from './sortbyemail/sortbyemail.component';
import { SortbycityComponent } from './sortbycity/sortbycity.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddAdmin2Component } from './add-admin2/add-admin2.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { Addcustomer2Component } from './addcustomer2/addcustomer2.component';
import { LogoutCustomerComponent } from './logout-customer/logout-customer.component';
import { UpdateCustomer2Component } from './update-customer2/update-customer2.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuard2Service } from './auth-guard2.service';
import { BankList2Component } from './bank-list2/bank-list2.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminListComponent,
    BankListComponent,
    CustomerListComponent,
    TransferListComponent,
    DepositListComponent,
    WithdrawListComponent,
    AdminComponent,
    CustomerComponent,
    UpdateAdminComponent,
    AddAdminComponent,
    AddBankComponent,
    UpdateBankComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    SortbynameComponent,
    SortbydobComponent,
    SortbyemailComponent,
    SortbycityComponent,
    HomeComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    LogoutComponent,
    AddAdmin2Component,
    DepositComponent,
    TransferComponent,
    WithdrawComponent,
    Addcustomer2Component,
    LogoutCustomerComponent,
    UpdateCustomer2Component,
    BankList2Component,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
