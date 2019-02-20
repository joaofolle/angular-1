import { Directive, ElementRef, HostListener, Renderer, Input } from "@angular/core";

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkerOnHoverDirective {
    @Input() brightness = '70%';
    
    constructor(
        private el: ElementRef,
        private render: Renderer    
    ){

    }

    @HostListener('mouseover')
    darkenOn(){
        console.log('Darken On');
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`)
    }


    @HostListener('mouseleave')
    darkenOff(){
        console.log('Darken Off');
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)')
    }
}