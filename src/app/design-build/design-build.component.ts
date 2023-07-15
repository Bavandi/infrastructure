import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-design-build',
  templateUrl: './design-build.component.html',
  styleUrls: ['./design-build.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignBuildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
