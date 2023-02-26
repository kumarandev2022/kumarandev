import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  customerId:number = 5001;
  //isLoggedIn = false;
 count:number = 0;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    //this.reloadPage();
    this.count+1;
    this.authService.getCustomerData(this.customerId).subscribe(
      data => {
        
        console.log(data);
      }
    )
    
}

reloadPage(): void {
  if(this.count == 0) {
  window.location.reload();
 
   }
  
 }
}

