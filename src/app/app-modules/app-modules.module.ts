import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppModuleRoutingModule} from './app-modules-routing.module';
import {AppModuleComponent} from './app-module/app-module.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
    imports: [
      CommonModule,
      AppModuleRoutingModule,
      NgbModule,
      FormsModule,
      Angular2FontawesomeModule
    ],
    declarations: [AppModuleComponent, HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  })
  export class AppModulesModule { }
