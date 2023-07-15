import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-projects-style2',
  templateUrl: './projects-style2.component.html',
  styleUrls: ['./projects-style2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsStyle2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
