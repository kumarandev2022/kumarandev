import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { LocalStorageService } from '../_services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerId: string ="";
  messageSuccess!:boolean;
  constructor(private router: Router,private authService:AuthService, public storage:LocalStorageService) { }
  ngOnInit(): void {
    // let win = (window as any);
    //   if(win.location.search !== '?loaded' ) {
    //       win.location.search = '?loaded';
    //       //win.location.reload();
    //   }
    this.customerId = localStorage.getItem('customerid') ?? '';
    this.authService.getCustomerData(this.customerId).subscribe(
      data => {
        
        console.log(data);
        this.reloadPage();
      }
    )
   
   
}

reloadPage(): void {
  this.messageSuccess = true;
    if(this.messageSuccess == true)
    {
     
      //setTimeout(()=>{  
             
       // window.location.href = this.router.url;                   // <<<---using ()=> syntax
    this.messageSuccess = false;
      //}, );
        }
        this.messageSuccess = false; 
       }
       

}

