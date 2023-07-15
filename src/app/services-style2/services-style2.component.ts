import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-services-style2',
  templateUrl: './services-style2.component.html',
  styleUrls: ['./services-style2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesStyle2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
