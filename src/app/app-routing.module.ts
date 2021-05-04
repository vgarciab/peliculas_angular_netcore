import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActorComponent } from './components/actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './components/actores/editar-actor/editar-actor.component';
import { IndiceActoresComponent } from './components/actores/indice-actores/indice-actores.component';
import { CrearCineComponent } from './components/cines/crear-cine/crear-cine.component';
import { EditarCineComponent } from './components/cines/editar-cine/editar-cine.component';
import { IndiceCinesComponent } from './components/cines/indice-cines/indice-cines.component';
import { CrearGeneroComponent } from './components/generos/crear-genero/crear-genero.component';
import { EditarGeneroComponent } from './components/generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './components/generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CrearPeliculaComponent } from './components/peliculas/crear-pelicula/crear-pelicula.component';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { EditarPeliculaComponent } from './components/peliculas/editar-pelicula/editar-pelicula.component';
import { FiltroPeliculasComponent } from './components/peliculas/filtro-peliculas/filtro-peliculas.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'generos', component: IndiceGenerosComponent },
  {path: 'generos/crear', component: CrearGeneroComponent },
  {path: 'generos/editar/:id', component: EditarGeneroComponent },
  {path: 'actores', component: IndiceActoresComponent },
  {path: 'actores/crear', component: CrearActorComponent },
  {path: 'actores/editar/:id', component: EditarActorComponent },
  {path: 'cines', component: IndiceCinesComponent },
  {path: 'cines/crear', component: CrearCineComponent },
  {path: 'cines/editar/:id', component: EditarCineComponent },
  {path: 'peliculas/crear', component: CrearPeliculaComponent },
  {path: 'peliculas/editar/:id', component: EditarPeliculaComponent },
  {path: 'peliculas/buscar', component: FiltroPeliculasComponent },
  {path: 'peliculas/:id', component: DetallePeliculaComponent },
  {path: '**', redirectTo: ''},  // -> Este es un wildcard que va a atrapar cualquier ruta (404, etc) que nos se aplique (no definida) en todas las anteriores (se leen por orden, de arriba a abajo)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
