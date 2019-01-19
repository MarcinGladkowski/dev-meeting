import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.scss']
})
export class AppProductListComponent implements OnInit {

  @Input() products: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}
