import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Directive({
  selector: '[biDisableLink]'
})
export class DisableLinkDirective implements OnChanges {
  @Input('ngDisableLink') disabled = true;
  @Input() href: string;
  @HostBinding('attr.href') hrefAttr: SafeUrl | string = '';
  @HostBinding('attr.aria-disabled') ariaDisabled = this.disabled;

  constructor(private sn: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    this.setHref();
    this.setDisabled();
  }

  setHref() {
    this.hrefAttr = this.disabled
      ? this.sn.bypassSecurityTrustUrl('javascript:void(0)')
      : this.href;
  }

  setDisabled() {
    this.ariaDisabled = this.disabled;
  }
}