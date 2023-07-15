import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-virtual-design-build',
  templateUrl: './virtual-design-build.component.html',
  styleUrls: ['./virtual-design-build.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualDesignBuildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
