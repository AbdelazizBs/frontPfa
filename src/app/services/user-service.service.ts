import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
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

  cityLocation =  this.getCityLocation(localStorage.getItem('id'));

  checkkLogin(username : any , password : any){
    this.loginservice.authenticate(username,password).subscribe(
      data => {
        this.router.navigate(['acceuil']);
      this.invalidLogin = false
      console.log(data);
  
      // const  = this.getLocation(data.locationId);
      // var locationObject ={id:locationUser.id, city:""};
      
      localStorage.setItem('username',data.username)
      localStorage.setItem('address',data.address)
      localStorage.setItem('preferedCategory',data.preferedCategory)
      localStorage.setItem('email',data.email)
      localStorage.setItem('location',data.locationId)
      localStorage.setItem('phoneNumber',data.phoneNumber)
      localStorage.setItem('id',data.id)
    },
    error => {
    this.invalidLogin = true
    }
    )
  }

  // getUser(id : any) {
  //   return this.Http.get(this.API_URL_USER + '/' + id)
  //   }


  createUser(item:any) {
        return <Observable<User>>this.Http
            .post<User>(this.API_URL_USER+ '/registre',JSON.stringify(item),this.httpOptions)
            .pipe(
              tap(() => {
                this.refreshNedeed.next();
              })
            );
    }

    createAnnance(item:any) {
      return <Observable<User>>this.Http
          .post<User>(this.API_URL_ANNANCE+ '/add',JSON.stringify(item),this.httpOptions)
          .pipe(
            tap(() => {
              this.refreshNedeed.next();
            })
          );
  }



  updateUser(item:any) {
    return <Observable<User>>this.Http
    .put<User>(this.API_URL_USER  +'/update/' + item['id'],JSON.stringify(item),this.httpOptions).pipe(
      tap(() => {
        this.refreshNedeed.next();
      })
    );
    }

    getLocation(id : any){
      return this.Http.get(this.API_URL_LOCATION + '/get/'+id);
    }
   getCityLocation(id : any){
      return this.Http.get(this.API_URL_LOCATION + '/getCityLocation/'+id);
    }
  }
