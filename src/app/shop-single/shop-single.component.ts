import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
