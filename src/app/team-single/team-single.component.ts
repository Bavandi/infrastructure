import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-team-single',
  templateUrl: './team-single.component.html',
  styleUrls: ['./team-single.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
