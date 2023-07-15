import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { RsCountDirective } from './directives/rs-count.directive';
import { PopupVideosDirective } from './directives/popup-videos.directive';
import { ProjectSlide1Directive } from './directives/project-slide-1.directive';
import { ProjectSlide2Directive } from './directives/project-slide-2.directive';
import { RsCarouselDirective } from './directives/rs-carousel.directive';
import { SkillbarDirective } from './directives/skillbar.directive';
import { SliderCarousel3Directive } from './directives/slider-carousel3.directive';
import { SliderForDirective } from './directives/slider-for.directive';
import { SliderNavDirective } from './directives/slider-nav.directive';
import { SliderSlide1Directive } from './directives/slider-slide-1.directive';
import { SliderSlide2Directive } from './directives/slider-slide-2.directive';
import { TestiSlide1Directive } from './directives/testi-slide-1.directive';
import { TestiSlide2Directive } from './directives/testi-slide-2.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { ServicesStyle2Component } from './services-style2/services-style2.component';
import { GeneralConstructionComponent } from './general-construction/general-construction.component';
import { PropertyMaintenanceComponent } from './property-maintenance/property-maintenance.component';
import { PreconstructionComponent } from './preconstruction/preconstruction.component';
import { VirtualDesignBuildComponent } from './virtual-design-build/virtual-design-build.component';
import { ProjectManagmentComponent } from './project-managment/project-managment.component';
import { DesignBuildComponent } from './design-build/design-build.component';
import { TeamStyle1Component } from './team-style1/team-style1.component';
import { TeamSingleComponent } from './team-single/team-single.component';
import { ProjectsStyle2Component } from './projects-style2/projects-style2.component';
import { ProjectsFilterStyle1Component } from './projects-filter-style1/projects-filter-style1.component';
import { ProjectsSingleComponent } from './projects-single/projects-single.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { DisableLinkDirective } from './directives/disable-link.directive';
import { RedirectToMapsDirective } from './directives/redirect-to-maps.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RsCountDirective,
    PopupVideosDirective,
    // ProjectSlide1Directive,
    // ProjectSlide2Directive,
    RsCarouselDirective,
    SkillbarDirective,
    // SliderCarousel3Directive,
    SliderForDirective,
    SliderNavDirective,
    SliderSlide1Directive,
    // SliderSlide2Directive,
    TestiSlide1Directive,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    BlogSingleComponent,
    ServicesStyle2Component,
    GeneralConstructionComponent,
    PropertyMaintenanceComponent,
    PreconstructionComponent,
    VirtualDesignBuildComponent,
    ProjectManagmentComponent,
    DesignBuildComponent,
    TeamStyle1Component,
    TeamSingleComponent,
    ProjectsStyle2Component,
    ProjectsFilterStyle1Component,
    ProjectsSingleComponent,
    PricingPlanComponent,
    FaqComponent,
    GalleryComponent,
    ShopComponent,
    ShopSingleComponent,
    CartComponent,
    CheckoutComponent,
    MyAccountComponent,
    DisableLinkDirective,
    RedirectToMapsDirective,
    // TestiSlide2Directive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
