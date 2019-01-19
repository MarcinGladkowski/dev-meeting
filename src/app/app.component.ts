import {Component, Injectable, OnInit} from '@angular/core';

export interface IProduct {
  brand: string;
  model: string;
  promotion: boolean;
}

@Injectable()
export class ProductsRepository {
  getProducts(): IProduct[] {
    return [
      {brand: 'Honda', model: 'Civic', promotion: false},
      {brand: 'Porsche', model: '911', promotion: true},
      {brand: 'Ferrari',  model: 'F50', promotion: false},
    ];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public products: IProduct[];
  private promotionProducts: IProduct[];

  constructor(private productRepository: ProductsRepository) {
    this.products = productRepository.getProducts();
  }

  ngOnInit() {
    this.promotionProducts = this.products.filter((car) =>  car.promotion === true );
  }
}
