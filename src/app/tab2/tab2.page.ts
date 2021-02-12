
import { ShareDataService } from '../services/share-data.service';
import { Component, OnInit } from '@angular/core';
import { persons } from '../interfaces/question';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

  constructor(private _persons : ShareDataService) {}
  ngOnInit(): void {
  }

  get list(): persons[]{
    return this._persons.persons;
  }
  set list(value : persons[]){
    this._persons.persons.push(...value);
  }

}
