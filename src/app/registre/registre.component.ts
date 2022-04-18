import { Component, OnInit , Input, ViewChild  } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
export class User {
  id!: number;
  username!: string;
  email!: string;
  address!: string;
  city!: any;
  password!: string;
  phoneNumber!: string;
  preferedCategory!: string;
}
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})


export class RegistreComponent implements OnInit {

  cityLocation:any

  userLogin:User
 invalidLogin = false;

 successMessage = "Authentication success";
 errorMessage = "Invalide username or password";

  public user : any
  constructor(private userService :UserServiceService,private router: Router ,private loginservice: AuthenticationService) {
    this.userLogin = new User;

   }

  ngOnInit(): void {
  this.userService.getAllCityLocation().subscribe((data: any)=>{
    this.cityLocation=data;
  })
  }
createUser() {
  this.user={
    "username":this.userLogin.username,
    "email":this.userLogin.email,
    "address":this.userLogin.address,
    "password":this.userLogin.password,
    "preferedCategory":this.userLogin.preferedCategory,
    "phoneNumber":this.userLogin.phoneNumber,

  }
this.userService.createUser(this.user,this.userLogin.city).subscribe(response => {
  console.log(response);
  console.log(this.userLogin.city);
});
  this.router.navigate(['login'])

}
}
