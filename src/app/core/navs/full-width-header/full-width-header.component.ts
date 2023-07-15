import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../../vendor-utils/js-plugins-init.service';

@Component({
  selector: 'bi-full-width-header',
  templateUrl: './full-width-header.component.html',
  styleUrls: ['./full-width-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullWidthHeaderComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializeStickyMenu(),
      this._jsPluginsInitService.canvasMenu(),
      this._jsPluginsInitService.mobileNavbarMenu(),
      this._jsPluginsInitService.menuMaker(),
      this._jsPluginsInitService.searchParent();
  }

}
