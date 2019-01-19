import { Component } from '@angular/core';

interface IProduct {
  brand: string;
  model: string;
  promotion: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: IProduct[] = [
    {brand: 'Honda', model: 'Civic', promotion: false},
    {brand: 'Porsche', model: '911', promotion: true},
    {brand: 'Ferrari',  model: 'Diablo', promotion: false},
  ];
  public promotionProducts = this.products.filter((car) =>  car.promotion === true );
}
