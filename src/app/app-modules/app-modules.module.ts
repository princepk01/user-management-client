import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppModuleRoutingModule} from './app-modules-routing.module';
import {AppModuleComponent} from './app-module/app-module.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
      CommonModule,
      AppModuleRoutingModule,
      NgbModule
    ],
    declarations: [AppModuleComponent, HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  })
  export class AppModulesModule { }
