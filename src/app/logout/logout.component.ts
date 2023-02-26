import { Component,OnInit } from '@angular/core';
import { LocalStorageService } from '../_services/local-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit  {

  //name:string = "Logout Successfully";
  constructor(public storage:LocalStorageService) { }

  ngOnInit(): void {

    localStorage.removeItem('status');
    //window.location.reload();

  }

}
