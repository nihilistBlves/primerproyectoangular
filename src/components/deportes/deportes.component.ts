import { Component } from "@angular/core";

@Component({
    selector: "deportes-component",
    templateUrl: "./deportes.component.html"
})

export class DeportesComponent {
    public deportes: Array<string>;
    public numeros: Array<number>;

    constructor() {
        this.deportes = ["Futbol", "Hockey", "Baseball", "Cricket"]; 
        this.numeros = [1,2,3,4,5,6,7,8,9,10];
    }
}