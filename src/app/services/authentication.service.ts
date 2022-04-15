import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  private API_URL_AUTH = environment.urlAuth;

  // authenticate(username: string, password:string) {
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   // let param = new HttpParams();
  //   // param.set('username',username);
  //   // param.set('password',password);
  //    return this.httpClient.post(this.API_URL_AUTH, { headers }).pipe
  //   (
  //    map(
  //    userData => {
  //    sessionStorage.setItem('username', username);
  //    sessionStorage.setItem('password', password);
  //    console.log(username + " " + password);
  //    return userData;
  //    }
  //    )
  //    );}
//   authenticate(email: any, password : any) {
//   const headers = new HttpHeaders();
//  return this.httpClient.post(environment.urlAuth, { headers }).pipe
// (
//  map(
//  userData => {
//  sessionStorage.setItem('email', email);
//  //sessionStorage.setItem('email', email);  
//  sessionStorage.setItem('password', password);
//   console.log(userData);
// //  console.log(email + " " + password);
// //  let authString = 'Basic ' + btoa(email + ':' + password);
// //  sessionStorage.setItem('basicauth', authString);
//  return userData;
//  }
//  )
//  );
// }

authenticate(username: string, password: string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({'Authorization':'Basic' + btoa("pfa" + ':' + "123") }),
  };
  var formData: any = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  // let headers=new HttpHeaders({'Authorization':'Basic' + btoa("pfa" + ':' + "123") });
  return this.httpClient.post( "http://127.0.0.1:8080/users/login" ,formData,httpOptions);
}

  // authenticate(email: any, password : any) {
  //   if (email === "pfa" && password === "123") {
  //   sessionStorage.setItem('email', email)
  //   console.log("success");
  //   return true;
    
  //   } else {
  //     console.log("failed")
  //   return false;
    

    // }
    // }
    isUserLoggedIn() {
      let user = localStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
      }
      logOut() {
      localStorage.removeItem('username')
      }
     
  }

