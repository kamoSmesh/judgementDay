import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginURL="http://localhos:t8000/login";

  constructor(private http :HttpClient ) { }


  login(model: any){

    return this.http.post(this.loginURL + 'login' , model)
  }
}
