import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PruebaComponent } from 'src/components/prueba/prueba.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { DeportesComponent } from 'src/components/deportes/deportes.component';
import { FormBindingModelComponent } from 'src/components/formbindingmodel/formbindingmodel.component';
import { FormulariosReferenciaComponent } from 'src/components/formulariosreferencia/formulariosreferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    HooksAngular,
    DeportesComponent,
    FormBindingModelComponent,
    FormulariosReferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
