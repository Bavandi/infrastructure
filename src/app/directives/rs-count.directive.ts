import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

declare const $: any;

@Directive({
  selector: '.rs-count',
})
export class RsCountDirective implements AfterViewInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef<HTMLDivElement>,
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngAfterViewInit(): void {
    // console.info("this.el")
    // console.info(this.el)
    if (this.el instanceof ElementRef) {
      this._jsPluginsInitService.counterUp(this.el.nativeElement);
    }
  }

}
