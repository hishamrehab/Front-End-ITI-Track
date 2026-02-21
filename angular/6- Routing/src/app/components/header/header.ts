import { Component } from '@angular/core';
import { StaticProductsService } from '../../../services/static-products';

@Component({
  selector: 'app-header',
  imports: [],
  providers: [StaticProductsService],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 constructor(private _staticProductsService: StaticProductsService) {}
}
