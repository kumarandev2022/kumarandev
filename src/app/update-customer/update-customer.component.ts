import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  // id: number;
  // employee: Employee = new Employee();
  // constructor(private employeeService: EmployeeService,
  //   private route: ActivatedRoute,
  //   private router: Router) { }

  ngOnInit(): void {
  }
  //   this.id = this.route.snapshot.params['id'];

  //   this.employeeService.getEmployeeById(this.id).subscribe(data => {
  //     this.employee = data;
  //   }, error => console.log(error));
  // }

  // onSubmit(){
  //   this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
  //     this.goToEmployeeList();
  //   }
  //   , error => console.log(error));
  // }

  // goToEmployeeList(){
  //   this.router.navigate(['/employees']);
  // }
}
