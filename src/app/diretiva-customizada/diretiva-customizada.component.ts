import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.css']
})
export class DiretivaCustomizadaComponent implements OnInit{
  mostrarCursos: boolean = false;
  mostrarCursos2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  onMostrarCursos2(){
    this.mostrarCursos2 = !this.mostrarCursos2;
  }
}
