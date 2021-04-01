import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

// Angular DatePipe - Cambiando el idioma.
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ListadoPeliculasComponent } from './components/peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './components/utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './components/material/material.module';
import { MenuComponent } from './components/menu/menu.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ 
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR'
    },
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
