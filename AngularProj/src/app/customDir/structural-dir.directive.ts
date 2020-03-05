import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appStructuralDir]'
})
export class StructuralDirDirective {

constructor(private tref : TemplateRef<any> , private vconRef : ViewContainerRef){}

@Input() set appStructuralDir(condition : string){
  if(condition){
    this.vconRef.createEmbeddedView(this.tref);
  }
  else{
    this.vconRef.clear();
  }
}
}
