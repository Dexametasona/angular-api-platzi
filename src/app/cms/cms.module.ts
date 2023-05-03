import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    PagesModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class CmsModule { }
