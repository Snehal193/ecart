import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface authResponseData{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn= false;
  private heroesUrl = 'api/heroes'; 

signUp(email: string, password: string){
  return this.http.post<authResponseData>(`heroesUrl`,
  {email, password})
}

  login(){
    this.isLoggedIn= true;
  }

  logout(){
    this.isLoggedIn= false;
  }

 isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

}
