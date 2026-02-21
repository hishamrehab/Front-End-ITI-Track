import { Component } from '@angular/core';
import { StaticProductsService } from '../../../services/static-products';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  providers: [StaticProductsService],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 constructor(private _staticProductsService: StaticProductsService) {}
}
