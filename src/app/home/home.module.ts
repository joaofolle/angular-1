
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        HomeComponent   
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        VMessageModule, 
        FormsModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers:[
        SignUpService
    ]

})
export class HomeModule {

}