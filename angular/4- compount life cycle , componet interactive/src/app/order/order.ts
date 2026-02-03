import { Component } from '@angular/core';
import { Icategory } from '../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Products } from "../components/products/products";

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, Products],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
    categories: Icategory[];
    selectedCatId: number = 0;

constructor() {
  this.categories =[
    {id : 1 , name : "laptops"},
    {id : 2 , name : "mobiles"},
    {id : 3 , name : "tablets"}
  ]
}
}
