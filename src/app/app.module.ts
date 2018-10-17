import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.modules';
import { AppComponent } from './component/app.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{HeaderComponent} from './app-modules/header/header.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
   AppComponent,
   
  
 ],
  imports: [
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule ,
    Angular2FontawesomeModule,
    BrowserAnimationsModule
  ],
  //declarations: [AppModuleComponent,HeaderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
