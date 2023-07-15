import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
