import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompsModule } from './comps/comps.module';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CompsModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    CategoryComponent
  ]
})
export class PagesModule { }
