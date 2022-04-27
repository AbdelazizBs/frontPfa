import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
// class Annance {
//   id: any;
//   description !: any;
//   date ! : Date;
//   userId ! : any;
//   picture!: any ;
//   category ! : any ;
//   locationCity ! : any

// }
@Component({
  selector: 'app-add-annance',
  templateUrl: './add-annance.component.html',
  styleUrls: ['./add-annance.component.scss']
})
export class AddAnnanceComponent implements OnInit {
  files!: File;
  cityLocation:any

  categorys:any
  // annanceUser:Annance

description:any

  
  userId : any;
  picture: any ;
  category : any ;
  locationCity  : any
  
 
  public annance : any
  constructor(private userService :UserServiceService,private router: Router ) {
    // this.annanceUser = new Annance;
   

   }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id')
 console.warn('-*-*-*',this.userId )
    this.userService.getAllCityLocation().subscribe((data: any)=>{
      this.cityLocation=data;
  });

//   this.userService.getAllCategory().subscribe((data: any)=>{
//     this.category=data;
// });
}
  createAnnance() {
 
    console.warn('-*-*-*',this.userId )
    console.warn('-*-*locationCity-*',this.locationCity )
    console.warn('-description*-*-*',this.description )
    console.warn('-*-category*-*',this.category )
   
   
  this.userService.createAnnance(this.locationCity,this.description,this.userId,this.category, this.files ).subscribe(response => {
    console.log(response);
  });
    // this.router.navigate(['allAnnances'])
  
  }
}
