import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private heroService: HeroService, private messageService: MessageService, private router : Router ) { }

  heroes = HEROES;
  
  // heroes: Hero[] = [];

  // add(data: any): void {
  //   this.heroService.addProduct(data).subscribe(hero => {
  //     this.heroes.push(hero);
  //     this.router.navigateByUrl('/product')
  //   });
  // }


  // addProds(){
  //   this.router.navigateByUrl('/product')
  // }



}
