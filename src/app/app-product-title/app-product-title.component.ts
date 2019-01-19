import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../app.component';

@Component({
  selector: 'app-product-title',
  templateUrl: './app-product-title.component.html',
  styleUrls: ['./app-product-title.component.scss']
})
export class AppProductTitleComponent implements OnInit {

  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
