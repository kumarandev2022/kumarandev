import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../_services/local-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit  {

  //visible:boolean = true;
  constructor(public storage:LocalStorageService, private router:Router) { }

  ngOnInit(): void {
    
  }
  logout():void {
   
    localStorage.removeItem('status');
    this.router.navigate(['/home'])
    //this.visible = !this.visible;
    //window.location.reload();
   // 
    //this.cancel();
    //this.router.navigate(['/home'])
  }

  cancel():void {
    this.router.navigate(['/home'])
    //
  }

}
