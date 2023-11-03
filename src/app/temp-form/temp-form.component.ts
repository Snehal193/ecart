import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';
// import { Hero } from '../hero';
import { SignInData } from '../model/signInData';

import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent {
  constructor(private authenticationService: AuthenticationService) { }
  isFormValid = false;
  areCredentialsInvalid = false;

  onFormSubmit(signInForm: NgForm){
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);

  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
 
  // constructor(private heroService: HeroService, ) {}
 
  // heroes: Hero[] = [];

  // ngOnInit(): void {
  //   this.getHeroes();
  // }


  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }



// @ViewChild ('myform') signUpForm : NgForm;
//   onFormSubmit(myForm : NgForm){
//     console.log(myForm)
    
//   }

//   onButtonclick(){
   
//   }

//   onButtonclick(){  //logic for lavigate to another page
// this.router.navigateByUrl("")  //given the path of home
//   }

  


