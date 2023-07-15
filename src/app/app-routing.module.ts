import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blog-single',
    component: BlogSingleComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'services-style2',
    component: ServicesStyle2Component,
  },

  {
    path: 'general-construction',
    component: GeneralConstructionComponent,
  },
  {
    path: 'property-maintenance',
    component: PropertyMaintenanceComponent,
  },
  {
    path: 'preconstruction',
    component: PreconstructionComponent,
  },
  {
    path: 'virtual-design-build',
    component: VirtualDesignBuildComponent,
  },
  {
    path: 'project-managment',
    component: ProjectManagmentComponent,
  },
  {
    path: 'design-build',
    component: DesignBuildComponent,
  },

  {
    path: 'team-style1',
    component: TeamStyle1Component,
  },
  {
    path: 'team-single',
    component: TeamSingleComponent,
  },

  {
    path: 'projects-style2',
    component: ProjectsStyle2Component,
  },

  {
    path: 'projects-filter-style1',
    component: ProjectsFilterStyle1Component,
  },

  {
    path: 'projects-single',
    component: ProjectsSingleComponent,
  },

  {
    path: 'pricing-plan',
    component: PricingPlanComponent,
  },

  {
    path: 'faq',
    component: FaqComponent,
  },

  {
    path: 'gallery',
    component: GalleryComponent,
  },

  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'shop-single',
    component: ShopSingleComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'my-account',
    component: MyAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
