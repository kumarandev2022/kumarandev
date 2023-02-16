import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

 // customer: Customer[];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(){
    // this.customerService.getCustomerList().subscribe(data => {
    //   this.customer = data;
    // });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    // this.employeeService.deleteEmployee(id).subscribe( data => {
    //   console.log(data);
    //   this.getEmployees();
    // })
  }
}