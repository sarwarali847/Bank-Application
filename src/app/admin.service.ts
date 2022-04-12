import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { Bank } from './bank';
import { Customer } from './customer';
import { Obj } from '@popperjs/core';
import { Deposit } from './deposit';
import { Transfer } from './transfer';
import { Withdraw } from './withdraw';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

 

  //Admin
  private adminList = "http://localhost:8000/getAdmin";
  private deleAdmin = "http://localhost:8000/admin";
  private editAdmin = "http://localhost:8000/update/admin";
  private getAdminByid = "http://localhost:8000/getAdmin";
  private addAdmin = "http://localhost:8000/addAdmin";

//Bank
  private bankList = "http://localhost:8000/getBank";
  private deleBank = "http://localhost:8000/bank";
  private editBank = "http://localhost:8000/update/bank";
  private getBankByid = "http://localhost:8000/getBank";
  private addBank = "http://localhost:8000/addBank";

  //customer
  private customerList = "http://localhost:8000/getCustomer";
  private deleCustomer = "http://localhost:8000/customer";
  private editCustomer = "http://localhost:8000/update/customer";
  private getCustomerByid = "http://localhost:8000/getCustomer";
  private addCustomer = "http://localhost:8000/addCustomer";
  private sortbyname = "http://localhost:8000/sortByFirstName";
  private sortbyemail = "http://localhost:8000/sortByEmail";
  private sortbydob = "http://localhost:8000/sortByDOB";
  private sortbycity = "http://localhost:8000/sortByCity";
  private searchcustomer = "http://localhost:8000/searchCustomer";
  private adminLogin = "http://localhost:8000/adminLogin";
  private customerbyemail ="http://localhost:8000/getCustomerByEamil";
  private customeridbyemail ="http://localhost:8000/getCustomerId";

  private depostlist = "http://localhost:8000/getDepositHistoryByCustomerId";

  private withdrawlist ="http://localhost:8000/getWithdrawHistoryByCustomerId";

  private transferlist ="http://localhost:8000/getTransferHistoryByCustomerId";


  private depositamnt = "http://localhost:8000/addBalance";

  private transferamnt = "http://localhost:8000/transferBalance";

  private withdrawamnt = "http://localhost:8000/withdrawBalance";





  constructor(private httpClient:HttpClient) { }

  //Bank Endpoints
  getBankList(): Observable<Bank[]>{
    return this.httpClient.get<Bank[]>(`${this.bankList}`);
  }
  updateBank(id:number, bank: Bank): Observable<Object>{
    return this.httpClient.put(`${this.editBank}/${id}`, bank);
  }

  deleteBank(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.deleBank}/${id}`);
  }

  getBankById(id:number):Observable<Object>{
    return this.httpClient.get(`${this.getBankByid}/${id}`)
  }

  createBank(bank: Bank): Observable<any>{
    return this.httpClient.post(`${this.addBank}`,bank);
  }

  //Admin Endpoints
  getAdminList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.adminList}`);
  }
  updateAdmin(id:number, admin: Admin): Observable<Object>{
    return this.httpClient.put(`${this.editAdmin}/${id}`, admin);
  }

  deleteAdmin(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.deleAdmin}/${id}`);
  }

  getAdminById(id:number):Observable<Object>{
    return this.httpClient.get(`${this.getAdminByid}/${id}`)
  }

  createAdmin(admin: Admin): Observable<any>{
    return this.httpClient.post(`${this.addAdmin}`,admin);
  }

 AdminLogin(admin:Admin):Observable<Object>{
   return this.httpClient.post(`${this.adminLogin}`,admin);
 }

  //Customer Endpoints

  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.customerList}`);
  }

  SortByName(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.sortbyname}`);
  }
  SortByDob(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.sortbydob}`);
  }
  SortByEmail(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.sortbyemail}`);
  }
  SortByCity(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.sortbycity}`);
  }
  updateCustomer(id:number, customer: Customer): Observable<Object>{
    return this.httpClient.put(`${this.editCustomer}/${id}`, customer);
  }

  deleteCustomer(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.deleCustomer}/${id}`);
  }

  getCustomerById(id:number):Observable<Object>{
    return this.httpClient.get(`${this.getCustomerByid}/${id}`)
  }

  createCustomer(customer: Customer): Observable<any>{
    return this.httpClient.post(`${this.addCustomer}`, customer);
  }
  SearchCustomer(keyword:any): Observable<any>{
    return this.httpClient.get(`${this.searchcustomer}/${keyword}`);
  }

  CustomerByEmail(email:string):Observable<any>{
    return this.httpClient.get(`${this.customerbyemail}/${email}`);
  }

  CustomerIdByEmail(email:string):Observable<any>{
    return this.httpClient.get(`${this.customeridbyemail}/${email}`);
  }


  depositHistory(customer_id:Number):Observable<Object>{
    return this.httpClient.get(`${this.depostlist}/${customer_id}`);
  }

  transferHistory(customer_id:Number):Observable<Object>{
    return this.httpClient.get(`${this.transferlist}/${customer_id}`);
  }

  withdrawHistory(customer_id:Number):Observable<Object>{
    return this.httpClient.get(`${this.withdrawlist}/${customer_id}`);
  }

  DepositAmnt(customer_id:Number,deposit:Deposit):Observable<Object>{
    return this.httpClient.put(`${this.depositamnt}/${customer_id}`, deposit);
  }

  TransferAmnt(customer_id:Number, transfer:Transfer):Observable<Object>{
    return this.httpClient.put(`${this.transferamnt}/${customer_id}`, transfer);
  }

  WithdrawAmnt(customer_id:Number, withdraw:Withdraw):Observable<Object>{
    return this.httpClient.put(`${this.withdrawamnt}/${customer_id}`, withdraw);
  }


}
