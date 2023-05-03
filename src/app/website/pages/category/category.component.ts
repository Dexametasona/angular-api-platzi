import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private data:DataService) {}
  products:Product[]=[]

  ngOnInit(): void {
    const category = this.activatedRoute.snapshot.paramMap.get('id')!

    this.data.getCategory(category).subscribe(data=>this.products=data
    )
  }
}
