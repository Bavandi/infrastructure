import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Directive({
  selector: '.slider-slide-2'
})
export class SliderSlide2Directive implements AfterViewInit{

  constructor(
    private el: ElementRef<HTMLDivElement>,
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngAfterViewInit(): void {
    if (this.el instanceof ElementRef) {
      // this._jsPluginsInitService.sliderSlide2(this.el.nativeElement)
    }
  }

}
