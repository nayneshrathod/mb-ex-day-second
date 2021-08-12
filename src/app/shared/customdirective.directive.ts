import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]',
})
export class CustomdirectiveDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.lineheight = '390px';
    /* Height - some (because visual center is a little higher than actual center) */
    el.nativeElement.style.textalign = 'center'; //= 'Red';
    el.nativeElement.style.color = 'white';
    // el.nativeElement.style.width = '250px';
    // el.nativeElement.style.padding = '20px';
    // el.nativeElement.style.backgroundColor = 'Blue';
    el.nativeElement.style.width = '700px';
    el.nativeElement.style.height = '400px';
    el.nativeElement.style.background = 'rgb(20,20,20)';
    // el.nativeElement.style.boxshadow =
      // '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)';
    el.nativeElement.style.outline = '1px solid #19f6e8';
    el.nativeElement.style.display = 'inline-block';
    el.nativeElement.style.padding = '15px 40px';

    el.nativeElement.style.texttransform = 'uppercase';
    el.nativeElement.style.fontfamily = '"Roboto", sans-serif';
    el.nativeElement.style.fontsize = '1.4em';
    el.nativeElement.style.fontweight = 'normal';
    el.nativeElement.style.lineheight = '32px';
    el.nativeElement.style.letterspacing = '8px';
  }
}
