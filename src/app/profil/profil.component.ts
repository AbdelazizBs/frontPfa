import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute } from '@angular/router';

export class User {
  id!: number;
  username!: string;
  email!: string;
  address!: string;
  location : any ;
  password!: string;
  phoneNumber!: string;
  preferedCategory!: string;
}
export class Location {
  id!: number;
  city!:String;

}
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})

export class ProfilComponent implements OnInit {
  userLogin:User
  userLocation:Location
  user :any;
  location :any;
username : any ;
 private id: any;
  email: any;
  address: any;
  locationCity : any;
  locationId: any;
  password: any;
  phoneNumber: any;
  preferedCategory: any;
  userToUpdate : any ;

  public cities: { name: string, id: string }[] = [];
  // public lData: any[];
  constructor(private service : UserServiceService,private router : Router,private Http: HttpClient,private route: ActivatedRoute) { 
    this.userLogin = new User;
    this.userLocation = new Location;

    
  }



  ngOnInit(): void {
    this.cities = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01'}];
   // console.log(this.cityLocation);
    this.id=localStorage.getItem('id');
    this.username=localStorage.getItem('username');
    this.address=localStorage.getItem('address');
    this.preferedCategory=localStorage.getItem('preferedCategory');
    this.email=localStorage.getItem('email');
    //this.location=this.cityLocation;
 
    this.phoneNumber=localStorage.getItem('phoneNumber');

     
}






updateUser() {
  this.userToUpdate = {
    'id':localStorage.getItem('id') ,
     'username': this.username,
  'email': this.email,
  'address': this.address,
  'phoneNumber': this.phoneNumber,
  'preferedCategory': this.preferedCategory,
  'location': this.locationCity
  }
 
  this.service.updateUser(this.userToUpdate).subscribe(
    data => {
    console.log(data);
    }
    );
    this.router.navigate(['profil']);
  }
}


  // refreshListProviders() {
  //   this.service.listProviders().subscribe(
  //   response => {
  //   this.providers = response;
  //   }
  //   );
  //   }



  