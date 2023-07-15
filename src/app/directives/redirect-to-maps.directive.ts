import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[biRedirectToMaps]'
})
export class RedirectToMapsDirective implements AfterViewInit, OnDestroy {
  private maps_url = 'https://maps.google.com/maps/dir//Dhome+Bar+And+Restaurant+Majengo,+Off+Ganda+Road/@-3.2149992,40.1145496,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x18158fb02820fe7f:0x2bb0fc4f7a5c00fc';


  @HostListener('click', ['$event']) /* note args array */
  onClick(event: any) {
    console.log({ event });
    event.preventDefault();

    this.redirectToMaps();
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) { }

  ngAfterViewInit(): void {
    // scroll or any other event
    // this.listenerFn = this.renderer.listen(this.el.nativeElement, 'click', (event) => {

    //   console.info({event})
    //   // Do something with 'event'
    //   // console.log(this.el.nativeElement.scrollTop);
    //   this.redirectToMaps();
    // });
  }

  ngOnDestroy(): void {
  }

  redirectToMaps() {
    const win = window.open(this.maps_url, '_blank', 'noopener,noreferrer');
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      // alert('Please allow popups for this website');
    }
  }


}
