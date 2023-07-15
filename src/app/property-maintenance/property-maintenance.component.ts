import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-property-maintenance',
  templateUrl: './property-maintenance.component.html',
  styleUrls: ['./property-maintenance.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyMaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
