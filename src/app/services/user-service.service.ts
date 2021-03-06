import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, Subject, Subscriber, tap } from 'rxjs';
import { User } from '../login/login.component';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  invalidLogin = false;
  userLogin:User
  private API_URL_USER = environment.urlUsers;
  private API_URL_ANNANCE = environment.urlAnnances;
  private API_URL_LOCATION = environment.urlLocation;

 user = new User();
  constructor(private Http: HttpClient,private loginservice: AuthenticationService,private router: Router) { 
    this.userLogin = new User;
  }
  private refreshData = new Subject<void>();
  get refreshNedeed() {
    return this.refreshData;
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


 

  //cityLocation =  this.getCityLocation(localStorage.getItem('id'));

 

  // getUser(id : any) {
  //   return this.Http.get(this.API_URL_USER + '/' + id)
  //   }


  createUser(item:any,locationCity:any) {
    let params = new HttpParams();
    params = params.append('locationCity', locationCity);
        return <Observable<User>>this.Http
            .post<User>(this.API_URL_USER+ '/registre',JSON.stringify(item),{
              headers: new HttpHeaders({
                'Content-Type': 'application/json'
              }),
              params: params,
              responseType: "json"
            })
            .pipe(
              tap(() => {
                this.refreshNedeed.next();
              })
            );
    }

    updateUser(id:any ,formData:any,locationCity:any) {
      let params = new HttpParams();
    params = params.append('locationCity', locationCity);
      return this.Http
      .put<any>(this.API_URL_USER  +'/update/' + id,formData,{
        params: params,
        responseType: "json"
      }).pipe(
        tap(() => {
          this.refreshNedeed.next();
        })
      );
      }
      createAnnance(locationCity:any,formData: any):Observable<any[]>{
        let params = new HttpParams();
        params = params.append('locationCity', locationCity);

        return this.Http.post<any>("http://127.0.0.1:8080/annances/add",formData,{
   
          params: params,
          responseType: "json"
        }).pipe(
          tap(() => {
            this.refreshNedeed.next();
          })
        );
      }
  //   createAnnance(item:any) {
  //     return <Observable<User>>this.Http
  //         .post<User>(this.API_URL_ANNANCE+ '/add',JSON.stringify(item),this.httpOptions)
  //         .pipe(
  //           tap(() => {
  //             this.refreshNedeed.next();
  //           })
  //         );
  // }


//   createAnnance(item:any, picture :any) {
//     let params = new HttpParams();
//     params = params.append('picture', picture);
//     return <Observable<User>>this.Http
//         .post<User>(this.API_URL_ANNANCE+ '/add',JSON.stringify(item){
//           headers: new HttpHeaders({
//             'Content-Type': 'application/json'
//           }),
//           params: params,
//           responseType: "json"
//         })
//         .pipe(
//           tap(() => {
//             this.refreshNedeed.next();
//           })
//         );
// }




    getLocation(id : any){
      return this.Http.get(this.API_URL_LOCATION + '/get/'+id);
    }

   getAllCityLocation():Observable<any[]>{
      return this.Http.get<any>(this.API_URL_LOCATION + '/getAllCityLocation');
    }
    getMyAnnances(id : any):Observable<any[]>{
      return this.Http.get<any>(this.API_URL_ANNANCE + '/my/'+id);
    }


    getAllAnnances(id : any):Observable<any[]>{
      return this.Http.get<any>(this.API_URL_ANNANCE + '/all/'+id);
    }

    // getAllCategory():Observable<any[]>{
    //   return this.Http.get<any>(this.API_URL_ANNANCE + '/all/');
    // }
  }
