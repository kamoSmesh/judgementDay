import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginURL="http://localhost:3000/users";

  constructor(private http :HttpClient ) { }

  register(user){
 this.http.post(this.loginURL,user).subscribe(
   _=>{
     alert('successful');
   },error=>{
     alert('unsucessful')
   }
 );
  }
  
}
