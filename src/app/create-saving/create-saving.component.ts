import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-saving',
  templateUrl: './create-saving.component.html',
  styleUrls: ['./create-saving.component.css']
})
export class CreateSavingComponent implements OnInit {
  form: any = {
    createdate: null,
    amount: 0,
    mode: null,
    submitted: null,
    customerid: null,
    status: null

  };
  isSuccessful = false;
  isSavingFailed = false;
  errorMessage = '';
  title = "ng-multiselect-dropdown";
  countries: Array<any> = [];
  selCountries = this.countries = [
    {
      item_id: 5001,
      item_text: "Srinivasan"
    },
    {
      item_id: 5002,
      item_text: "Kumaran"
    },
    {
      item_id: 5003,
      item_text: "Jai"
    }
  ];
  dropdownSettings: any = {};

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  get getItems() {
    return this.countries.reduce((acc, curr) => {
      acc[curr.item_id] = curr;
      console.log(curr);
      return acc;
    }, {});
  }
 

  onItemSelect(item: any) {
    console.log("onItemSelect", item);
  }
  onSelectAll(items: any) {
    console.log("onSelectAll", items);
  }
  
  
  constructor(private authService: AuthService) { }



  onSubmit(): void {
    const { createdate, amount,mode,submitted,customerid,status } = this.form;

    this.authService.savings(createdate, amount,mode,submitted,customerid,status).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSavingFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSavingFailed = true;
      }
    );
   }
}