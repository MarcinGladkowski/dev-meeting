import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductsRepository {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://shining-torch-4509.firebaseio.com/products.json').pipe(
      map(data => {
        const products = Object.keys(data).map(function (key) {
          return data[key];
        });
        return products;
      })
    );
  }

  // getProducts(): IProduct[] {
  //   return [
  //     {name: 'Honda', price: 100},
  //     {name: 'Porsche', price: 100},
  //     {name: 'Ferrari',  price: 100},
  //   ];
  // }
}
