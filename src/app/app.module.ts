import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { ShareDataService } from './services/share-data.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    CommonModule, 
    HttpClientModule,
    ComponentsModule
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ShareDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
