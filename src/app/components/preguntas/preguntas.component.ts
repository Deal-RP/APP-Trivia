import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { Question, persons } from '../../interfaces/question';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
})

export class PreguntasComponent implements OnInit {

  constructor(private questionService: PreguntasService,
    private modalCtrl: ModalController,
    private router: Router) { }

  interval;
  @Input() category : string;
  @Input() name: string;
  selection = "";
  pregunta: string = "";
  correct: string = "";
  respuestas: string[] = [];
  num: number = -1;
  msgButton = "Siguiente";
  numCorrectas = 0;
  now: any;
  minutes = 0;
  seconds  = 0;
  total : persons;

  ngOnInit() {
    this.cargarPreguntas();
    this.startTimer();
  }

  cargarPreguntas(){
    let cont = 0;
    this.questionService.getQuestions(this.category)
    .subscribe(async (resp : Question[] ) => {
      await Promise.all(
        resp.map((x : Question) =>{
          if(cont === this.num){
            this.pregunta = x.question as string;
            this.correct = x.correct_answer as string;
            this.respuestas.push(...x.incorrect_answers);
            this.respuestas.splice(Math.random() * 3, 0, x.correct_answer);
          }
          cont++;
        })
      )
    });
    this.num++;
  }

  changeRespuesta( event ){
    this.selection = event.detail.value;
  }

  evaluar(){
    if(this.correct === this.selection){
      this.numCorrectas++;
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.seconds == 60){
        this.seconds = 0;
        this.minutes++;
      }
      else{
        this.seconds++;
      }
    },1000)
  }

  siguiente(){
    this.respuestas = [];
    if(this.num < 19){
      this.evaluar();
      this.cargarPreguntas();
    }
    else if(this.num === 19){
      this.num++;
      this.evaluar();

      this.total ={
        name: this.name,
        minutos: this.minutes,
        segundos: this.seconds,
        points: this.numCorrectas,
        total: this.numCorrectas - (this.minutes * 60) - this.seconds
      }
      this.pregunta = "Felicidades"
      this.msgButton = "Regresar";
    }
    else{
      console.log(this.total);
      this.modalCtrl.dismiss(this.total);
    }
  }
}
