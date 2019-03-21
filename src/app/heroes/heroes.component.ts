import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { PETSLIST, PETOBJECT } from '../pets';
import { HEROES } from '../mock-heroes';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero = ""
  heroes = null;
  hero = null;


  constructor(private dataService: DataService) {

let id =1
    this.hero = dataService.getUser();
    console.log(this.hero);

  }


  petsList = [{ id: 1, name: "Huda" }, { id: 2, name: "Nadia" }];

  star = "Blue Star";


  ngOnInit() {
  }

  nFunction(personDetail: any) {
    this.selectedHero = personDetail

  }

}
