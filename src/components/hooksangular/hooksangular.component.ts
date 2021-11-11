import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component ({
    selector: "hooksangular-component",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit {
    public mensaje: string;

    constructor() {
        this.mensaje = "Mensaje desde Component";
        console.log("Constructor: Ejecutando en el constructor");
    }

    ngOnInit(): void {
        console.log("ngOnInit(): Ejecutando después del constructor");
    }

    ngDoCheck():void {
        console.log("ngDoCheck(): Ejecutado cuando la vista ha cambiado")
    }

    cambiarMensaje(): void {
        this.mensaje = "Single Day!!";
    }

    ngOnDestroy():void {
        console.log("ngOnDestroy(): Componente destruido");
    }
}