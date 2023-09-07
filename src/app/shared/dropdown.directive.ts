import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class customDropdown {
    @HostBinding('class.parent') isOpen =true;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}