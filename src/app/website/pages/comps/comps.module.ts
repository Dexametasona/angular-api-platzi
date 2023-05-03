import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    CardComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    SliderComponent
  ]
})
export class CompsModule { }
