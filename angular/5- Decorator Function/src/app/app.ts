import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Products } from "./components/products/products";
import { Footer } from "./components/footer/footer";
import { Order } from "./order/order";

@Component({
  selector: 'app-root',
  imports: [Header, Products, Footer, Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerceApp');
}
