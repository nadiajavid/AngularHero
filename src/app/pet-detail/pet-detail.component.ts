import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  @Input() personsDetail: any;
  hero = null;
  constructor(private dataservice: DataService) {



    this.hero = JSON.stringify(this.hero);

    console.log("getting signle hero list from service:", this.hero);

    console.log("just checking", this.personsDetail);
  }


  async getUserInCom() {
    this.hero = await this.dataservice.getUser();
    console.log("Hero After wait", this.hero)
  }
  ngOnInit() {
    console.log("Before")
    this.getUserInCom()
    console.log("After")
  }

}
