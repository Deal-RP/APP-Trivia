import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor( private http : HttpClient) { }


  getQuestions(category : string){
    const query = `assets/bancoPreguntas/${category}.json`;
    return this.http.get(query);
  }

  getCategory(){
    const query = 'assets/bancoPreguntas/category.json';
    return this.http.get(query);
  }
}
