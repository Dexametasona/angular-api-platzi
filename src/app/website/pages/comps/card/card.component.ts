import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product:Product={
    id:"",
    category:{
      id:"",
      name:""
    },
    description:"",
    price:0,
    title:"",
    images:[]
  }

}
