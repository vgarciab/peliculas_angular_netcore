import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceGenerosComponent } from './components/generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'generos', component: IndiceGenerosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
