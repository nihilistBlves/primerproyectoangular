import { Component } from "@angular/core";

@Component ({
    //INDICAMOS EL NOMBRE DEL COMPONENT
    selector: "prueba-component",
    templateUrl: "./prueba.component.html",
    styleUrls: ["./prueba.component.css"]
})

export class PruebaComponent {
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    public ocultar: boolean;

    //INICIALIZAMOS LAS PROPIEDADES EN EL CONSTRUCTOR
    constructor() {
        this.titulo = "FELIZ JUEVES!!";
        this.descripcion = "-dijo Asuka.";
        this.anyo = 2021;
        this.ocultar = false;
    }

    ocultarComponente(): void {
        this.ocultar = true;
    }
}