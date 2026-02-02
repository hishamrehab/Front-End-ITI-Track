import { Component } from '@angular/core';
import { IStore } from '../../models/istore';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
 myStore:IStore;

 constructor() {
  this.myStore={
    name : 'H&M',
    imageUrl:"https://picsum.photos/536/354",
    branches: ["cairo" , "alex"]
  }
 }
}
