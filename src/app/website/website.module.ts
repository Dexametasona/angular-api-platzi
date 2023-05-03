import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { EccomerceComponent } from './eccomerce/eccomerce.component';
import { WebsiteRoutingModule } from './website-routing.module';



@NgModule({
  declarations: [
    EccomerceComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    WebsiteRoutingModule
  ],
  exports:[
    EccomerceComponent
  ]
})
export class WebsiteModule { }
