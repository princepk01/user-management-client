import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.modules';
import { AppComponent } from './component/app.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{HeaderComponent} from './app-modules/header/header.component';

@NgModule({
  declarations: [
   AppComponent,
  
 ],
  imports: [
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserModule
  ],
  //declarations: [AppModuleComponent,HeaderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
