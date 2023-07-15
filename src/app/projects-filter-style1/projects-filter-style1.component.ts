import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'bi-projects-filter-style1',
  templateUrl: './projects-filter-style1.component.html',
  styleUrls: ['./projects-filter-style1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsFilterStyle1Component implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.imageLoadedPortfolioInit(),
      this._jsPluginsInitService.projectFilter();
  }

}
