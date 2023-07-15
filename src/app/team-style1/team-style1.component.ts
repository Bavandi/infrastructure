import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-team-style1',
  templateUrl: './team-style1.component.html',
  styleUrls: ['./team-style1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamStyle1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
