import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Directive({
  selector: '.slider-for'
})
export class SliderForDirective implements AfterViewInit {

  constructor(
    private el: ElementRef<HTMLDivElement>,
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngAfterViewInit(): void {
    if (this.el instanceof ElementRef) {
      this._jsPluginsInitService.teamSlider(this.el.nativeElement);
    }
  }

}
