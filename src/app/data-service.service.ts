import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async getUser(): Promise<Hero> {
    await this.delay(3000);
    let data = { id: 1, name: "Nadia" }
    return data;
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }





  getUsersList(): Hero[] {
    return HEROES;
  }


}
