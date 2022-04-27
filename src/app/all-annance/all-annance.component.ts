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
  selector: 'app-all-annance',
  templateUrl: './all-annance.component.html',
  styleUrls: ['./all-annance.component.scss']
})
export class AllAnnanceComponent implements OnInit {
  annances :any
  userIdd : any;
  annancesAfterFilter:any
  searchByCategorie:String = ""

  constructor(private userService :UserServiceService) { 
    this.getMyAnnances()
  }

  ngOnInit(): void {
  }
  getMyAnnances(){
    this.userIdd =  localStorage.getItem('id');
    console.warn('*---**',this.userIdd);
    if (this.userIdd) {
     this.userService.getAllAnnances( this.userIdd).subscribe((data : any) => {
       this.annances=data;
       this.annancesAfterFilter = this.annances
       console.warn('*---**',this.annances);
          })
    }
  }
}
