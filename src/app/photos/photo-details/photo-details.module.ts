import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { VMessageModule } from "../../shared/vmessage/vmessage.module";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { ShowWithLoggedModule } from "../../shared/directives/show-with-logged/show-with-logged.module";

@NgModule({
    declarations:[
        PhotoDetailsComponent,
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective
    ],
    imports: [
        CommonModule, 
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
        ShowWithLoggedModule
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent        
    ]
})
export class PhotoDetailsModule {

}