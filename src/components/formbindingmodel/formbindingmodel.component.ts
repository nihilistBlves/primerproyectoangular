import { Component } from "@angular/core";

@Component({
    selector: "formbindingmodel-component",
    templateUrl: "./formbindingmodel.component.html"
})

export class FormBindingModelComponent {
    public user: any;
    public mensaje: string;

    constructor() {
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        };
        this.mensaje = "";
    }

    recibirFormulario(): void {
        this.mensaje = "Datos recibidos!!!";
    }
}