import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JsPluginsInitService } from './core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'bi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private _routerEventSubscription?: Subscription;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _renderer2: Renderer2,
    private _router: Router,
    private _jsPluginsInitService: JsPluginsInitService,
    @Inject(DOCUMENT) private _document: Document,
  ) { }

  ngAfterViewInit(): void {
    this._setupRouterEventSubscription();

    this._renderer2.addClass(this._document.body, 'defult-home');

    this._jsPluginsInitService.scollTopInit();
  }


  ngOnDestroy(): void {
    this._destroyRouterEventSubscription();
  }

  private _manuallyTriggerChangeDetection() {
    this._changeDetectorRef.detectChanges();
  }

  private _setupRouterEventSubscription() {
    this._routerEventSubscription = this._router.events
      .subscribe(event => {
        switch (true) {
          case event instanceof NavigationStart: {
            // setTimeout(() => {
            //   this._jsPluginsInitService.initializeShowPreloader();
            // }, 500);
            this._preloader('on');

            this._jsPluginsInitService.manuallyCloseCanvasMenu();

            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            // setTimeout(() => {
            //   this._jsPluginsInitService.initializePreloader();
            // }, 500);
            this._preloader('off');

            // console.info("this.isLoading");
            // console.info(this.isLoading);

            this._jsPluginsInitService.manuallyScroll();


            break;
          }
          default: {
            break;
          }
        }
      })
  }

  private _destroyRouterEventSubscription() {
    if (this._routerEventSubscription instanceof Subscription) {
      this._routerEventSubscription.unsubscribe();
    }
  }

  private _preloader(state: 'on' | 'off') {
    // console.info({ state });
    // console.info("this.updateLoading b4");
    // console.info(this.isLoading)
    // const LOADER_CLASS = 'page-loaded';

    if (state === 'on') {
      // this._renderer2.removeClass(this._document.body, LOADER_CLASS);
    }
    else {
      this._jsPluginsInitService.windowLoad(),
        this._jsPluginsInitService.preloader();
    }

    // console.info("this.updateLoading afta");
    // console.info(this.isLoading)


  }
}
