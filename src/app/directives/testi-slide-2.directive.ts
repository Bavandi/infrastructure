import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Directive({
  selector: '.testi-slide-2'
})
export class TestiSlide2Directive  implements AfterViewInit{

  constructor(
    private el: ElementRef<HTMLDivElement>,
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngAfterViewInit(): void {
    if (this.el instanceof ElementRef) {
      // this._jsPluginsInitService.testiSlider2(this.el.nativeElement)
    }
  }

}
