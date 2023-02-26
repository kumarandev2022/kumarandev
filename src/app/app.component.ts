import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './_services/local-storage.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // private roles: string[] = [];
  status: string = "fail";
  //isLoggedIn = false;
  // showAdminBoard = false;
  // showModeratorBoard = false;
  // username?: string;
  // messageFromChild!: string;

  // onMessageFromChild(message: string) {
  //   console.log('Parent: ', message)

  //   this.messageFromChild = message;
  // }
  constructor(private tokenStorageService: TokenStorageService, public storage: LocalStorageService) { }

  ngOnInit(): void {

    this.status = localStorage.getItem('status') ?? '{}';
    console.log('ssssss:::'+this.status);
    //this.reloadPage();
  // this.isLoggedIn = !!this.tokenStorageService.getToken();
    //this.isLoggedIn = true;
    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.roles = user.roles;

    //   this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    //   this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

    //   this.username = user.username;
    // }
  }

 

  reloadPage(): void {
    window.location.reload();
  }
}