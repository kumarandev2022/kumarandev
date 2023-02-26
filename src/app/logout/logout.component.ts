import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../_services/local-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit  {

  //name:string = "Logout Successfully";
  constructor(public storage:LocalStorageService, private router:Router) { }

  ngOnInit(): void {
  }
  logout():void {
    localStorage.removeItem('status');
    this.router.navigate(['/home'])
    //window.location.reload();
  }

  cancel():void {
    this.router.navigate(['/home'])
    //window.location.reload();
  }

}
