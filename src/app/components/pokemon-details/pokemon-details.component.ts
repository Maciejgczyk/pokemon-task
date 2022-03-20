import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {switchMap} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonForm: FormGroup;
  pokemon: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }) => {
        return this.dataService.getPokemonCardById(id);
      })
    ).subscribe((el) =>  {
      this.pokemon = el;

      this.pokemonForm = this.fb.group({
        name: [el.name, Validators.required],
        supertype: [el.supertype, Validators.required],
        rarity: [el.rarity, Validators.required]
      })
    })
  }

  savePokemonChanges() {
    if(this.pokemonForm.valid) {
      this.dataService.savePokemonChanges(this.pokemon.id, this.pokemonForm.value);
      alert('Form sent successfully');
    }
  }
}
