import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {

  private API_URL_USER = environment.urlUsers;
  constructor(public loginService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }

  updateUser(myObj : any) {
    this.router.navigate([this.API_URL_USER+ '/profil/' + myObj['id']]);
    }
   
}
