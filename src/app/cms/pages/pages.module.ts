import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home/home.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    Home1Component,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Home1Component,
    FilterComponent
  ]
})
export class PagesModule { }
