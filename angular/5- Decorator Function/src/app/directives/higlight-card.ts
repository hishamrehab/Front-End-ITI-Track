import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHiglightCard]',
})
export class HiglightCard implements OnChanges {
  
 @Input() externalColor:string = "black";
 @Input('appHiglightCard') defaultColor: string = "red";

  constructor(private ele:ElementRef) { 
    console.log(ele);
  }
  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') over() {
     this.ele.nativeElement.style.backgroundColor = this.externalColor;
   }

 @HostListener('mouseout')  out() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
   }
}


