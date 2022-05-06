import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subject, Subscriber, tap } from 'rxjs';
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
   picture: any
  annancesAfterFilter:any
  profileImage:any;
  searchByCategorie:String = ""
  constructor(private userService :UserServiceService,private changeDetector:ChangeDetectorRef,private _sanitizer: DomSanitizer) { 
    this.annance = new Annance();
  }

  ngOnInit(): void {
    this.getMyAnnances()
  }
//   convertToBase64(file : File){
//     const observable = new Observable((subscriber : Subscriber<any>)=> {
//     this.readFile(file,subscriber);   
//     })
//     observable.subscribe((d)=>{
//       this.picture=d ;
//     })
//   }
//   readFile(file : File ,subscriber : Subscriber<any>){
// const fileReader = new FileReader();
// fileReader.readAsDataURL(file);
// fileReader.onload=()=>{
//   subscriber.next(fileReader.result);
//   subscriber.complete();
// }
// fileReader.onerror=(error)=>{
//   subscriber.error(error); 
//     subscriber.complete();
  
// }
//   }
//  arrayBufferToBase64( buffer : any ) {
//   var binary = '';
//   var bytes = new Uint8Array( buffer );
//   var len = bytes.byteLength;
//   for (var i = 0; i < len; i++) {
//       binary += String.fromCharCode( bytes[ i ] );
//   }
//   return window.btoa( binary );
//  }
  getMyAnnances(){
   this.userIdd =  localStorage.getItem('id');
   console.warn('*---**',this.userIdd);
   if (this.userIdd) {
    this.userService.getMyAnnances( this.userIdd).subscribe((data : any) => {
      
      // this.annance=data;
      this.annancesAfterFilter = data

      // console.log(data.picture.bytes);
      this.annancesAfterFilter.map((an:any)=>{
        // console.log(an);

        // console.log(an.picture[1].bytes);

     an.picture.map((ann:any)=>{
    //  this.picture = 'data:image/jpg;base64,' +ann.bytes;
    let objectURL = 'data:image/jpg;base64,' + ann.bytes;
  this.picture = this._sanitizer.bypassSecurityTrustUrl(objectURL);
      // this.arrayBufferToBase64(ann.bytes);
      console.log(  this.picture);
//       // console.log(ann);
//       // console.log(ann.fyles);
//       // console.log(ann.bytes)
// //          var reader = new FileReader();
// //          reader.onload = (event:any) => 
// //          {
// //              this.profileImage = event.target.result;
// //              console.log(event.target.result);
// //              this.changeDetector.detectChanges();
// //          }
// //          reader.readAsDataURL(ann);
// //  console.log(reader);

   
         })
           });
    //   for(let  picture of this.annancesAfterFilter.picture){
    //   this.pictures = picture.bytes
    //   console.log(this.pictures);
    // }
    // this.annancesAfterFilter.picture.map((hist:any) => {
    //   this.pictures = hist.bytes
     
    // })
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
