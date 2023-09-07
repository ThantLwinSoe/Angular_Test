import { Component } from '@angular/core';
//import { Hero } from '../hero'; // interface methods
import { HEROS } from '../mock.heros';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROS;
//  hero : Hero = {id: 0,name: ''} // using the interface method

  selectedHero?: Hero;
  onSelect(hero : Hero) : void{
    this.selectedHero = hero;
  }


}
