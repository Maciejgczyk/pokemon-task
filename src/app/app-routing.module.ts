import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonDetailsComponent} from "./components/pokemon-details/pokemon-details.component";
import {PokemonContainerComponent} from "./components/pokemon-container/pokemon-container.component";

const routes: Routes = [
  { path: 'main', component: PokemonContainerComponent },
  { path: 'main/:id', component: PokemonDetailsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
