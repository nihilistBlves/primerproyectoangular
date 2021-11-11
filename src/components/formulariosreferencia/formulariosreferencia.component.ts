import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "formulariosreferencia-component",
    templateUrl: "./formulariosreferencia.component.html"
})

export class FormulariosReferenciaComponent {
    @ViewChild("cajanumero1") cajanumero1: ElementRef;
    @ViewChild("cajanumero2") cajanumero2: ElementRef;
    public suma: number;

    constructor() {
        this.suma = 0;
        this.cajanumero1 = new ElementRef(0);
        this.cajanumero2 = new ElementRef(0);
    }

    sumar(): void {
        var num1 = this.cajanumero1.nativeElement.value;
        var num2 = this.cajanumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
}