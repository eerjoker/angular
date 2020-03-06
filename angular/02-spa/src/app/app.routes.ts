import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent }, // el path es el que va en el routerLink
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES/*, { useHash: true }*/); // se usa el useHash para guardar los parámetros puestos desde url al actualizar la página
