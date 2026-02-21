import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HiglightCard } from '../../directives/higlight-card';
import { SquarePipe } from '../../pipes/square-pipe';
import {  StaticProductsService } from '../../../services/static-products';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule , HiglightCard , SquarePipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

  export class Products implements OnChanges{
  products:Iproduct[]
  totalOrderPrice:number = 0;
  myDate: Date = new Date();
  num : number = 4;
  filteredProducts: Iproduct[] = [];
 

  // define event
 @Output() onTotalPriceChanged : EventEmitter<number>  

  @Input() recievedCategoryId:number = 0;

  
  constructor(private _StaticProductsService: StaticProductsService) {
    this.products = this._StaticProductsService.getAllProducts();

    this.filteredProducts = this.products;
  
    this.onTotalPriceChanged = new EventEmitter<number>();
 }


  ngOnChanges() {
    // this.filterProducts();

   this.filteredProducts = this._StaticProductsService.getProductsByCategoryId(this.recievedCategoryId)
  }

  buy(count: string , price: number) {
  this.totalOrderPrice += +count * price;
  console.log(this.totalOrderPrice);

  // emit event
   this.onTotalPriceChanged.emit(this.totalOrderPrice);
  }

  change() {
  //  this.selectedCatId = +this.selectedCatId;
  }

  trackItem(index: number, item: Iproduct) {
  return item.id;
  }

}
