import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
class Annance {
  id! : any;
  description !: any;
  date ! : Date;
  userId ! : any;
  picture!: any ;
  category ! : any ;
  locationCity ! : any

}
@Component({
  selector: 'app-annance',
  templateUrl: './annance.component.html',
  styleUrls: ['./annance.component.scss']
})
export class AnnanceComponent implements OnInit {
  annance : Annance;
  annances :any
  userIdd : any;
  annancesAfterFilter:any
  searchByCategorie:String = ""
  constructor(private userService :UserServiceService) { 
    this.annance = new Annance();
  }

  ngOnInit(): void {
    this.getMyAnnances()
  }


  getMyAnnances(){
   this.userIdd =  localStorage.getItem('id');
   console.warn('*---**',this.userIdd);
   if (this.userIdd) {
    this.userService.getMyAnnances( this.userIdd).subscribe((data : any) => {
      this.annances=data;
      this.annancesAfterFilter = this.annances
      console.warn('*---**',this.annances);
         })
   }
  }





  // filter(){
  //   console.warn("eeeeeeeeeee",this.searchByCategorie)
  //   this.annancesAfterFilter = this.annances.filter((_:any)=>{
  //     _.category.toLowerCase().includes(this.searchByCategorie.toLowerCase())
  //   })
  //   }

  



}
