import {Component, OnInit} from '@angular/core';
import {ProductsRepository} from './services/ProductsRepository';

export interface IProduct {
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public products;

  constructor(private productRepository: ProductsRepository) {}

  ngOnInit() {
    this.productRepository.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
