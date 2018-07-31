//Angular imports
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppModuleComponent} from './app-module/app-module.component';
import {LoginComponent} from './user/login/login.component'

/**
 * App modules routing
 * @export
 * @class AppModuleRoutingModule
 */

 @NgModule({
     imports : [
         RouterModule.forChild([
             {
                 path: '',
                 component : AppModuleComponent,
                 children: [
                     {
                         path: 'user',
                         loadChildren: './user/user.module#UserModule',
                     },
                 ]
             },
             {
                 path: '**',
                 redirectTo: '',
                 pathMatch: 'full'
             }
            
         ])
     ],
     exports:[
         RouterModule
     ]
 })
 export class AppModuleRoutingModule{
     
 }