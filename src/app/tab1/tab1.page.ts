import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PreguntasComponent } from '../components/preguntas/preguntas.component';
import { Triviacategory, persons } from '../interfaces/question';
import { PreguntasService } from '../services/preguntas.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  name= "";
  categorias : Triviacategory[] = [];
  selection="general";
  person : persons[] = [];
  params;

  constructor( 
    private questionService: PreguntasService,
    private modalCtrl : ModalController,
    private _persons : ShareDataService) {}

    get list(): persons[]{
      return this._persons.persons;
    }
    set list(value : persons[]){
      this._persons.persons = [];
      this._persons.persons.push(...value);
    }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.questionService.getCategory()
    .subscribe((resp : Triviacategory[])=> {
      this.categorias.push(...resp);
    });
    
  }

  changeCategory( event ){
    this.selection = event.detail.value;
  }

  async jugar(){
    let category = this.selection;
    let name = this.name;
    const modal = await this.modalCtrl.create({
      component: PreguntasComponent,
      componentProps:{
        category,
        name
      }
    });
    
    await modal.present();

    const data = await modal.onDidDismiss();
    this.list.push(data.data);
    
    this.list.sort(function(a, b) { return a.points - b.points});
  }
}
