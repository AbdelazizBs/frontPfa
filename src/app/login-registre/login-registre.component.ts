import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

export class User {
  id!: number;
  username!: string;
  email!: string;
  address!: string;
  password!: string;
  phoneNumber!: string;
  preferedCategory!: string;
}
@Component({
  selector: 'app-login-registre',
  templateUrl: './login-registre.component.html',
  styleUrls: ['./login-registre.component.scss']
})
export class LoginRegistreComponent implements OnInit {
  userLogin:User
  
  public user : any
  constructor(private userService :UserServiceService,private router: Router ) {
    this.userLogin = new User;
   }

  ngOnInit(): void {
  }


//   createUser(myform : any) {
//     this.userService.createUser(myform).subscribe(
//     response => {
//     console.log(response);
//     })
//     this.router.navigate(['acceuil']);
//  }
createUser() {
  this.user={
    "username":this.userLogin.username,
    "email":this.userLogin.email,
    "address":this.userLogin.address,
    "password":this.userLogin.password,
    "preferedCategory":this.userLogin.preferedCategory,
    "phoneNumber":this.userLogin.phoneNumber
  }
this.userService.createUser(this.user).subscribe(() => {
});

this.router.navigate(['acceuil'])
}

}
