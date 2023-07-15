import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
