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
  city!:any;
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
  files!: File;
  userLogin:User
  // userLocation:Location
  user :any;
  location :any;
username : any ;
 private id: any;
  email: any;
  address: any;

  locationCity : any;
 
  password: any;
  phoneNumber: any;
  preferedCategory: any;
  userToUpdate : any ;
  cityLocation:any
  // public lData: any[];
  constructor(private service : UserServiceService,private router : Router,private Http: HttpClient,private route: ActivatedRoute) { 
    this.userLogin = new User;
    //this.userLocation = new Location;

    
  }



  ngOnInit(): void {
    this.service.getAllCityLocation().subscribe((data: any)=>{
      this.cityLocation=data;
    })
    // this.cities = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01'}];
   // console.log(this.cityLocation);
    this.id=localStorage.getItem('id');
    this.username=localStorage.getItem('username');
    this.address=localStorage.getItem('address');
    this.preferedCategory=localStorage.getItem('preferedCategory');
    this.email=localStorage.getItem('email');
    this.locationCity=localStorage.getItem('locationCity');
    this.phoneNumber=localStorage.getItem('phoneNumber');
     
}





  


updateUser() {
  console.warn('-*-username*-*',this.username )
  let formData: FormData  = new FormData();
  this.id=localStorage.getItem('id');
  formData.append('username', this.username);
  formData.append('email', this.email);
  formData.append('address', this.address);
  formData.append('phoneNumber', this.phoneNumber);
  formData.append('password', this.password);
  formData.append('preferedCategory', this.preferedCategory);
  formData.append('file',new Blob([JSON.stringify({
    files: 'files',
  })], {
  type: 'application/json'
}))
  // this.userToUpdate = {
  //   'id':localStorage.getItem('id') ,
  //    'username': this.username,
  // 'email': this.email,
  // 'address': this.address,
  // 'phoneNumber': this.phoneNumber,
  // 'preferedCategory': this.preferedCategory,
  // // 'locationCity': this.locationCity
  // }
 
  this.service.updateUser(this.id,formData,this.userLogin.city).subscribe(
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



  