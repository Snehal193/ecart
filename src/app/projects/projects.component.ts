import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { NgForm } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  constructor(private heroService: HeroService, private router: Router) {}
  // selectedHero?: Hero;
  // heroes: Hero[] = [];//array that we impoted from heroes
  heroes = HEROES;

  

  //delete product
  delete(data: any): void {
 
    this.heroes = this.heroes.filter(h => h !== data);
    this.heroService.deleteHero(data).subscribe();

    const modaldiv = document.getElementById('myModal3');
    if(modaldiv!=null){
      modaldiv.style.display = 'block'
    }
  }

  //modal for delete product

  CloseModal3(){
    const modaldiv = document.getElementById('myModal3');
    if(modaldiv!=null){
      modaldiv.style.display = 'none'
    }
  }


  //modal for delete product
  openModal1(){
    const modaldiv = document.getElementById('myModal1');
    if(modaldiv!=null){
      modaldiv.style.display = 'block'
    }
  }


  CloseModal1(){
    const modaldiv = document.getElementById('myModal1');
    if(modaldiv!=null){
      modaldiv.style.display = 'none'
    }
  }

  //modal for add product
  openModal(){
    const modaldiv = document.getElementById('myModal');
    if(modaldiv!=null){
      modaldiv.style.display = 'block'
    }
  }


  CloseModal(){
    const modaldiv = document.getElementById('myModal');
    if(modaldiv!=null){
      modaldiv.style.display = 'none'
    }
  }
//function to add product
  add(data: any): void {
    this.heroService.addProduct(data).subscribe(hero => {
      this.heroes.push(hero);
      this.router.navigateByUrl('/product')
    });
  }

}
