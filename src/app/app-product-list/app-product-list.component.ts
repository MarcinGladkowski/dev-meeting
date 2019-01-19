import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../app.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.scss']
})
export class AppProductListComponent implements OnInit {

  searchInput = new FormControl('');

  @Input() products;
  private backupProducts;

  constructor() { }

  ngOnInit() {
    this.searchInput.valueChanges.subscribe((value: string) => {
      this.find(value);
    });

    this.backupProducts = this.products;
  }

  filter(name: string) {
    this.products = this.products.filter((product) => product.name === name);
  }

  filterByInput(event: any) {
    this.find(event.target.value);
  }

  private find(value: string) {
    const filtered = this.products.filter((product) => {
      const props = Object.keys(product);
      let find = false;
      for (const prop of props) {
        if (product[prop] === value) {
          find = true;
          return find;
        }
      }
    });

    if (filtered.length > 0) {
      this.products = filtered;
    }
    if (value.length === 0) {
      this.products = this.backupProducts;
    }
  }
}
