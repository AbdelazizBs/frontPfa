import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
export class User {
  id!: number;
  username!: string;
  email!: string;
  address!: string;
  password!: string;
  phoneNumber!: string;
  preferedCategory!: string;
  location!: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userLogin:User
invalidLogin = false;
 
 successMessage = "Authentication success";
 errorMessage = "Invalide username or password";

  public user : any
  constructor(private userService :UserServiceService,private router: Router ,private loginservice: AuthenticationService) {
    this.userLogin = new User;
   }

  ngOnInit(): void {
  }
  checkLogin() {
    this.userService.checkkLogin(this.userLogin.username,this.userLogin.password)
    }
  
  
    
 
  
}
