import { Directive, HostBinding, HostListener, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  // @HostListener: Este decorador vincula um método de classe a um evento do elemento host.
  @HostListener('mouseenter') 
  onMouseOver(){
    // quando passar o mouse em cima fica na cor 'aquamarine' e a letra fica 'blue'
    // this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'aquamarine');
    this.backgroundColor = 'green';
    this.color = 'white';
  }

  @HostListener('mouseleave') 
  onMouseLeave(){
    // quando tirar o mouse de cima volta a ficar branco e a letra volta a ficar preta
    // this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
    this.color = 'black';
  }

  // @HostBinding: este decorador vincula uma propriedade de classe a uma propriedade do elemento host.
  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.color') color: string = '';

  constructor(private _ElementRef: ElementRef, private _renderer: Renderer2) {
  }

  ngOnInit(){
  }

}


/* HostBinding -----> Declara uma associação de propriedade de host. 
     O angular verifica automaticamente as vinculações de propriedades do host durante a detecção de alterações. 
     Se uma ligação for alterada, ela atualizará o elemento host da diretiva.
*/
