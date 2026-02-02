import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products {
 products:Iproduct[]
 totalOrderPrice:number = 0;
 selectedCatId: number = 0;
 categories: Icategory[];

 constructor() {
  this.products = [
 {
  id: 100 
  , name : "Dell laptop" 
  , price: 500000 
  , quantity: 3 
  , imgUrl: "https://picsum.photos/id/1/200/300",
    catId: 1
  },
   {
  id: 200 
  , name : "HP laptop" 
  , price: 100000 
  , quantity: 10
  , imgUrl: "https://picsum.photos/id/1/200/300",
    catId: 1
  },

  {
  id: 300 
  , name : "Iphone" 
  , price: 10000 
  , quantity: 100
  , imgUrl: "https://picsum.photos/id/1/200/300",
    catId: 2
  },
  {
  id: 400 
  , name : "oppo" 
  , price: 60000 
  , quantity: 1
  , imgUrl: "https://picsum.photos/id/1/200/300",
    catId: 2
  },


  {
  id: 500 
  , name : "samosong tablet" 
  , price: 20000 
  , quantity: 0
  , imgUrl: "https://picsum.photos/id/1/200/300",
    catId: 3
  },
  {
  id: 600 
  , name : "lenovo tablte" 
  , price: 60000 
  , quantity: 4
  , imgUrl: "https://picsum.photos/id/1/200/300",
    catId: 3
  }
  ]
  this.categories =[
    {id : 1 , name : "laptops"},
    {id : 2 , name : "mobiles"},
    {id : 3 , name : "tablets"}
  ]
 }

  buy(count: string , price: number) {
  this.totalOrderPrice += +count * price;
  console.log(this.totalOrderPrice);
  }

 change() {
this.selectedCatId = +this.selectedCatId;
 }

trackItem(index: number, item: Iproduct) {
 return item.id;
}

}
