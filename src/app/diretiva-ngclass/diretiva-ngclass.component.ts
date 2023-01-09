import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent  implements OnInit{

  meuFavorito: boolean = false;
  meuFavorito2: boolean = false;

  ngOnInit(){}
  constructor(){}

  onClick(){
    this.meuFavorito = !this.meuFavorito; //ao clicar na estrela ela fica "cheia" = true
  }

  onClick2(){
    this.meuFavorito2 = !this.meuFavorito2; //ao clicar na estrela ela fica "cheia" = true
  }
}
