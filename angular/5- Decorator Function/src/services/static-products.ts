import { Injectable } from '@angular/core';
import { Iproduct } from '../app/models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  products: Iproduct[];

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
 }
  getAllProducts():Iproduct[] {
    return this.products;
  }
  
  getProductsById(id:number):Iproduct | null {
    let foundedProduct = this.products.find((prod) => prod.id === id)
    return foundedProduct ? foundedProduct : null;
  }
  
    getProductsByCategoryId(catId:number):Iproduct[] {
         if(catId === 0) {
      return this.products;
    } else {
    return this.products.filter((prod) => prod.catId === catId) 
    }
    }

  // addProduct() {

  // }
}
