import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule, FormBuilder } from "@angular/forms";

import { PhotoFormComponent } from "./photo-form.component";
import { VMessageModule } from "../../shared/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { PhotoModule } from "../photo/photo.module";
import { ImmediateClickModule } from "../../shared/directives/immediate-click/immediate-click.module";

@ NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        PhotoModule,
        ImmediateClickModule
    ]
})

export class PhotoFormModule {
    constructor(
        private formBuilder: FormBuilder    
    ) {

    }

}