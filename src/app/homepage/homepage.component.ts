import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../_services/local-storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public storage:LocalStorageService) {
        }

  ngOnInit(): void {
    
    // if (!localStorage.getItem('status')) { 
    //   
    //   location.reload(); 
    // } else {
    //   localStorage.removeItem('status'); 
    // }
    
  }
}
