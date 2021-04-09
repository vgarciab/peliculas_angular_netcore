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
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';


import { MaterialModule } from './components/material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { RatingComponent } from './components/utilidades/rating/rating.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IndiceGenerosComponent } from './components/generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './components/generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './components/actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './components/actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './components/peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './components/cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './components/cines/indice-cines/indice-cines.component';
import { EditarActorComponent } from './components/actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './components/generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './components/cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './components/peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioGeneroComponent } from './components/generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './components/peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './components/actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './components/utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './components/utilidades/input-markdown/input-markdown.component';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCinesComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
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
