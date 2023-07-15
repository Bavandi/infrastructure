import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-project-managment',
  templateUrl: './project-managment.component.html',
  styleUrls: ['./project-managment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectManagmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
