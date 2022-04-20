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
  locationCity!: string;
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
  // checkLogin() {
  //   this.userService.checkkLogin(this.userLogin.username,this.userLogin.password)
  //   }

    checkLogin(){
      (this.loginservice.authenticate(this.userLogin.username,this.userLogin.password).subscribe(
        data => {
          this.router.navigate(['acceuil']);
        this.invalidLogin = false
       
    
        // const  = this.getLocation(data.locationId);
        // var locationObject ={id:locationUser.id, city:""};
        
        localStorage.setItem('username',data.username)
        localStorage.setItem('address',data.address)
        localStorage.setItem('preferedCategory',data.preferedCategory)
        localStorage.setItem('email',data.email)
        localStorage.setItem('locationCity',data.locationCity)
        localStorage.setItem('phoneNumber',data.phoneNumber)
        localStorage.setItem('id',data.id)
      },
      error => {
      this.invalidLogin = true
      }
      )
      );
    }
  
  
    
 
  
}
