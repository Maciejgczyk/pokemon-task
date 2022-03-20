import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent implements OnInit {
  pokemonCards$: Observable<any>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.pokemonCards$ = this.dataService.getPokemonCards();
  }
}
