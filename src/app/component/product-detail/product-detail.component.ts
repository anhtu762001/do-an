import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  xeDapDien = [
    {name: 'VNBike V4893', type: 'xeDapDien', price: 8000000, imgs: 'd_vnbike-v4893.jpg'},
    {name: 'Giant M133G559', type: 'xeDapDien', price: 17000000, imgs: 'd_giant-m133g559.jpg'},
    {name: 'Xe Điện 3 Bánh Mini Sure963', type: 'xeKhac', price: 30000000, imgs: 'k_mini-sure963.jpg'},
  ];
}
