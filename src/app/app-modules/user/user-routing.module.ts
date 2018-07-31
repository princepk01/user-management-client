import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistratonComponent} from './registraton/registraton.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
// import{
//     ForgotPasswordComponent,
//     LoginComponent,
//     RegistrationComponent
// }

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registration',
                component: RegistratonComponent
            },
            {
                path: 'forgot',
                component: ForgotPasswordComponent
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full'
            }
        ])

    ],
    providers: [],
    exports: [RouterModule]
})
export class UserRoutingModule{}