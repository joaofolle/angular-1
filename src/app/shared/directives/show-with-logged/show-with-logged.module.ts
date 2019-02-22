import { NgModule } from "@angular/core";
import { ShowWithLoggedDirective } from "./show-with-logged.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[ShowWithLoggedDirective],
    exports:[ShowWithLoggedDirective],
    imports: [CommonModule]
})
export class ShowWithLoggedModule {}