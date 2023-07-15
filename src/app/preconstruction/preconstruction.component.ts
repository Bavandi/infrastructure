import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-preconstruction',
  templateUrl: './preconstruction.component.html',
  styleUrls: ['./preconstruction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreconstructionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
