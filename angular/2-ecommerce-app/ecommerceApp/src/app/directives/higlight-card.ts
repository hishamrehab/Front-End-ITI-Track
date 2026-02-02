import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHiglightCard]',
})
export class HiglightCard {

  constructor(ele:ElementRef) { 
    ele.nativeElement.style.backgroundColor = "gary";
  }
}
