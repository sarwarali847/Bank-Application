import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { SortbycityComponent } from './sortbycity/sortbycity.component';
import { SortbydobComponent } from './sortbydob/sortbydob.component';
import { SortbyemailComponent } from './sortbyemail/sortbyemail.component';
import { SortbynameComponent } from './sortbyname/sortbyname.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AuthGuardService } from './auth-guard.service';
import { AddAdmin2Component } from './add-admin2/add-admin2.component';
import { CustomerComponent } from './customer/customer.component';
import { DepositListComponent } from './deposit-list/deposit-list.component';
import { WithdrawListComponent } from './withdraw-list/withdraw-list.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { Addcustomer2Component } from './addcustomer2/addcustomer2.component';
import { AuthGuard2Service } from './auth-guard2.service';
import { LogoutCustomerComponent } from './logout-customer/logout-customer.component';
import { UpdateCustomer2Component } from './update-customer2/update-customer2.component';
import { BankList2Component } from './bank-list2/bank-list2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "admin-login", component: AdminLoginComponent},
  {path: "admin-list", component: AdminListComponent, canActivate:[AuthGuardService]},
  {path: "admin", component: AdminComponent, canActivate:[AuthGuardService]},
  {path:"update-admin/:admin_id", component: UpdateAdminComponent, canActivate:[AuthGuardService]},
  {path:"add-admin", component: AddAdminComponent, canActivate:[AuthGuardService]},
  {path:"add-admin2", component: AddAdmin2Component},
  {path:"bank-list", component: BankListComponent, canActivate:[AuthGuardService]},
  {path:"add-bank", component: AddBankComponent, canActivate:[AuthGuardService]},
  {path:"update-bank/:bank_id", component:UpdateBankComponent, canActivate:[AuthGuardService]},
  {path:"customer-list", component: CustomerListComponent, canActivate:[AuthGuardService]},
  {path: "sort-by-name", component: SortbynameComponent, canActivate:[AuthGuardService]},
  {path: "sort-by-dob", component: SortbydobComponent, canActivate:[AuthGuardService]},
  {path: "sort-by-city", component: SortbycityComponent, canActivate:[AuthGuardService]},
  {path: "sort-by-email", component: SortbyemailComponent, canActivate:[AuthGuardService]},
  {path:"add-customer", component: AddCustomerComponent, canActivate:[AuthGuardService]},
  {path:"add-customer2", component: Addcustomer2Component},
  {path:"bank-list", component: BankListComponent, canActivate:[AuthGuardService]},
  {path:"bank-list2", component: BankList2Component},
  {path:"update-customer/:customer_id", component: UpdateCustomerComponent, canActivate:[AuthGuardService]},
  {path:"home", component: HomeComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  {path: 'logout-customer', component: LogoutCustomerComponent, canActivate:[AuthGuard2Service]},
  {path:"customer/:customer_id", component:CustomerComponent, canActivate:[AuthGuard2Service]},
  {path:"update-customer2/:customer_id", component: UpdateCustomer2Component, canActivate:[AuthGuard2Service]},
  {path:"deposit-list/:customer_id", component:DepositListComponent,canActivate:[AuthGuard2Service]},
  {path:"withdraw-list/:customer_id", component:WithdrawListComponent,canActivate:[AuthGuard2Service]},
  {path:"transfer-list/:customer_id", component:TransferListComponent,canActivate:[AuthGuard2Service]},
  {path:"deposit/:customer_id", component:DepositComponent,canActivate:[AuthGuard2Service]},
  {path:"withdraw/:customer_id", component:WithdrawComponent,canActivate:[AuthGuard2Service]},
  {path:"transfer/:customer_id", component:TransferComponent,canActivate:[AuthGuard2Service]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
