import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  ;
  constructor() { }

  ngOnInit(): void {
  }
  xeDapDien = [
    // yamaha
    {name: 'Yamaha ICATS N2', type: 'xeDapDien', price: 18000000, imgs: 'd_yamaha_icats_n2.jpg'},
    {name: 'Yamaha Scrooter Passol EC', type: 'xeMayDien', price: 25000000, imgs: 'm_yamaha-scooter-passol-ec.jpg' },

    // giant 
    {name: 'Giant M133G559', type: 'xeDapDien', price: 17000000, imgs: 'd_giant-m133g559.jpg'},
    {name: 'Giant M133S Plus', type: 'xeMayDien', price: 27000000, imgs: 'm_giant-m133s-plus972.jpg'},
    // VNBIKE
    {name: 'VNBike V1 22INH350', type: 'xeDapDien', price: 7000000, imgs: 'd_vnbike-v1-22inh503.jpg'},
    {name: 'VNBike V4893', type: 'xeDapDien', price: 8000000, imgs: 'd_vnbike-v4893.jpg'},
    // Khac
    {name: 'Xe Điện 3 Bánh Mini Sure963', type: 'xeKhac', price: 30000000, imgs: 'k_mini-sure963.jpg'},
    {name: 'Oto 8 chỗ LVTong', type: 'xeKhac', price: 3000000000, imgs: 'k_oto-8-cho-ngoi-lvtong-lt-s8fa725.jpg'},
    {name: 'Xe Eagle EG511', type: 'xeKhac', price: 60000000, imgs: 'k_xe-dien-tuan-tra-eagle-eg6011ba779.jpg'},
    // Phu Tung
    {name: 'Board Điều khiển xe', type: 'phuTung', price: 500000, imgs: 'p_board-dieu-khien-xe-dap-dien-myoko-cap-a-48v-350w596.jpg'},
    {name: 'Phuộc sau xe', type: 'phuTung', price: 1500000, imgs: 'p_phuoc-sau-xe-dap-dien-cap-a-michi634.jpg'},
  ];
}
