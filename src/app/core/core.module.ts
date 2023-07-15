import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullWidthHeaderComponent } from './navs/full-width-header/full-width-header.component';
import { FooterComponent } from './navs/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FullWidthHeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [FullWidthHeaderComponent, FooterComponent]
})
export class CoreModule { }
