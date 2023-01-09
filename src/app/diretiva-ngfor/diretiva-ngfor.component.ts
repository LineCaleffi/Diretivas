import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit{

  cursos: string[]=["Angular 2", "Java", "Android"];


  pokemons: string[]=[
    "Pikachu", 
    "Raichu",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Eevee", 
    "Sylveon",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Glaceon",
    "Leafeon",
    "Bulbassaur",
    "Ivysaur",
    "Venusaur"
  ];

  pokedex= [
    {
      nome: 'Pikachu',
      tipo: 'Raio',
      evolucao:"sim"
    },
    {
      nome: 'Charmander',
      tipo: 'Fogo',
      evolucao:"sim"
    },
    {
      nome: 'Bulbassaur',
      tipo: 'Planta e vento',
      evolucao:"sim"
    },
    {
      nome: 'Vaporeon',
      tipo: 'Água',
      evolucao:"não"
    },
  ]


  constructor() { }
  ngOnInit(){
    for (let i = 0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }
}
