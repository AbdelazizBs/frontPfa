import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../login/login.component';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private API_URL_USER = environment.urlUsers;
 user: any;
 username = sessionStorage.getItem('username');
 password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }
  private refreshData = new Subject<void>();
  get refreshNedeed() {
    return this.refreshData;
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // createUser(myform : any) {
  //   this.user = {
  //   'user': myform.value.userName,
  //   'email': myform.value.userEmail,
  //   'address': myform.value.userAdress,
  //   'password': myform.value.userPassword,
  //   'perferedCategory':myform.value.userPerferedCategory,
  //   'phoneNumber':myform.value.userPhoneNumber,
  //   }
  //   return this.Http.post(this.urlUsers + '/registre', this.user);
  //   }
  // createUser(item:any): Observable<User> {
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
  //   // let headers=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.TOKEN_KEY});
  //   return <Observable<User>>this.Http
  //     .post<User>(this.urlUsers + '/registre', JSON.stringify(item),this.httpOptions)
  //     .pipe(
  //       tap(() => {
  //         this.refreshNedeed.next();
  //       })
  //     );
  
  // }

  createUser(item:any) {
        return <Observable<User>>this.Http
            .post<User>(this.API_URL_USER+ '/registre',JSON.stringify(item),this.httpOptions)
            .pipe(
              tap(() => {
                this.refreshNedeed.next();
              })
            );
    }
   

}
