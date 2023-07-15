import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Directive({
  selector: '.rs-carousel'
})
export class RsCarouselDirective implements AfterViewInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef<HTMLDivElement>,
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngAfterViewInit(): void {
    if (this.el instanceof ElementRef) {
      this._jsPluginsInitService.owlCarousel(this.el.nativeElement);
    }
  }

}
