import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  xeDapDien = [
    // honda
    {name: 'Yamaha ICATS N2', type: 'xeDapDien', price: 18000000, imgs: 'd_yamaha_icats_n2.jpg'},
    {name: 'Giant M133S Plus', type: 'xeMayDien', price: 27000000, imgs: 'm_giant-m133s-plus972.jpg'},
    {name: 'Oto 8 chỗ LVTong', type: 'xeKhac', price: 3000000000, imgs: 'k_oto-8-cho-ngoi-lvtong-lt-s8fa725.jpg'},
    
  ];
}
