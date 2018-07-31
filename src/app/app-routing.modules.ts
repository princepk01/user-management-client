import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
/**
 * Main app routing i.e. for root
 * @export
 * @class AppRoutingModule
 */
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path : 'app',
                    loadChildren : './app-modules/app-modules.module#AppModulesModule',
                }
            ]
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{
    
}