import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
