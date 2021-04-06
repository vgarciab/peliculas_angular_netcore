import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActorComponent } from './components/actores/crear-actor/crear-actor.component';
import { IndiceActoresComponent } from './components/actores/indice-actores/indice-actores.component';
import { CrearCineComponent } from './components/cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './components/cines/indice-cines/indice-cines.component';
import { CrearGeneroComponent } from './components/generos/crear-genero/crear-genero.component';
import { IndiceGenerosComponent } from './components/generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CrearPeliculaComponent } from './components/peliculas/crear-pelicula/crear-pelicula.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'generos', component: IndiceGenerosComponent },
  {path: 'generos/crear', component: CrearGeneroComponent },
  {path: 'actores', component: IndiceActoresComponent },
  {path: 'actores/crear', component: CrearActorComponent },
  {path: 'cines', component: IndiceCinesComponent },
  {path: 'cines/crear', component: CrearCineComponent },
  {path: 'peliculas/crear', component: CrearPeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
