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
    createDate: null,
    totalMembers: null,
    monthlySavAmt: null,
    totalSavAmt: null
  };
  isSuccessful = false;
  isSavingFailed = false;
  errorMessage = '';
  title = "ng-multiselect-dropdown";
  countries: Array<any> = [];
  selCountries = [
    {
      item_id: 1,
      item_text: "Srinivasan"
    },
    {
      item_id: 2,
      item_text: "Kumaran"
    }
  ];
  dropdownSettings: any = {};

  ngOnInit() {
    this.countries = [
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 4,
        item_text: "Suresh",
       isDisabled: true
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      },
      {
        item_id: 1,
        item_text: "Srinivasan"
      },
      {
        item_id: 2,
        item_text: "Kumaran"
      },
      {
        item_id: 3,
        item_text: "Jai"
      }
    ];

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
    const { createDate, totalMembers, monthlySavAmt, totalSavAmt } = this.form;

    this.authService.savings(createDate, totalMembers, monthlySavAmt, totalSavAmt).subscribe(
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