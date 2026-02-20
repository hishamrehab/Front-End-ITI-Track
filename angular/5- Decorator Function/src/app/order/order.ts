import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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

export class Order implements AfterViewInit {
    categories: Icategory[];
    selectedCatId: number = 0;
    recevedTotalPrice: number = 0;

  @ViewChild('userNameInput') myInput!:ElementRef; 
  @ViewChild(Products) ProdustsComponentObj!:Products;
   


  constructor() {
    this.categories =[
      {id : 1 , name : "laptops"},
      {id : 2 , name : "mobiles"},
      {id : 3 , name : "tablets"}
    ]
  }

  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = "Hisham Rehab"
    console.log(this.ProdustsComponentObj.products);
  }

  calcTotalPrice(top: number) {
  this.recevedTotalPrice = top
  }
}
