import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-general-construction',
  templateUrl: './general-construction.component.html',
  styleUrls: ['./general-construction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralConstructionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
