import { Injectable } from '@angular/core';
import { SignInData } from 'src/app/model/signInData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: SignInData = new SignInData('user@gmail.com', 'test');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['dashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

 
}