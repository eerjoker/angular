import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Localización para el pipe Date, luego de instalar localize
import { registerLocaleData } from '@angular/common';
import localEsAr from '@angular/common/locales/es-AR';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEsAr);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizarPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      // se indica como predeterminada la localización de argentina
      useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
