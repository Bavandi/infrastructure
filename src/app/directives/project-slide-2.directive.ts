import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Directive({
  selector: '.project-slide-2'
})
export class ProjectSlide2Directive implements AfterViewInit {

  constructor(
    private el: ElementRef<HTMLDivElement>,
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngAfterViewInit(): void {
    if (this.el instanceof ElementRef) {
      // this._jsPluginsInitService.projectSlide2(this.el.nativeElement)
    }
  }

}
