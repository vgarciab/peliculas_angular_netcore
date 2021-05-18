import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

// Angular DatePipe - Cambiando el idioma.
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ListadoPeliculasComponent } from './components/peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './components/utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import  "leaflet/dist/images/marker-shadow.png";
import 'leaflet/dist/images/marker-icon.png';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';





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
import { FormularioCineComponent } from './components/cines/formulario-cine/formulario-cine.component';
import { MapaComponent } from './components/utilidades/mapa/mapa.component';
import { FormularioPeliculaComponent } from './components/peliculas/formulario-pelicula/formulario-pelicula.component';
import { SelectorMultipleComponent } from './components/utilidades/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from './components/actores/autocomplete-actores/autocomplete-actores.component';
import { MostrarErroresComponent } from './components/utilidades/mostrar-errores/mostrar-errores.component';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { AutorizadoComponent } from './components/seguridad/autorizado/autorizado.component';
import { LoginComponent } from './components/seguridad/login/login.component';
import { RegistroComponent } from './components/seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './components/seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { SeguridadInterceptorService } from './components/seguridad/seguridad-interceptor.service';
import { IndiceUsuariosComponent } from './components/seguridad/indice-usuarios/indice-usuarios.component';


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
    InputMarkdownComponent,
    FormularioCineComponent,
    MapaComponent,
    FormularioPeliculaComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent,
    MostrarErroresComponent,
    DetallePeliculaComponent,
    AutorizadoComponent,
    LoginComponent,
    RegistroComponent,
    FormularioAutenticacionComponent,
    IndiceUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS, useClass: SeguridadInterceptorService, multi: true},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'},
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
