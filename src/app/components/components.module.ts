import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  entryComponents: [
    PreguntasComponent
  ],
  declarations: [
    PreguntasComponent
  ],
  exports: [
    PreguntasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
