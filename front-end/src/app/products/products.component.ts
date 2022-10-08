import { Component, Input, OnInit } from '@angular/core';
import { product } from '../modele/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent  {
  @Input()productItem!: product;
  lest:product[]=[];
  cartItemList: any;
  productList: any;
  constructor() {
    let p1:product = {"id":0 , "name":"Head Phone","quantity":10 , "price":25 , "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"}
    let p2:product ={"id":1 , "name":"lg phones","quantity":5 , "price":50 , "img":"https://www.lg.com/us/images/cell-phones/md07517294/gallery/mobile-03.jpg"}
    let p3:product ={"id":2 , "name":"Iphone","quantity":8 , "price":100 , "img":"https://th.bing.com/th/id/OIP.NBz1yYtLs1WL-CMibA3nOgHaMU?pid=ImgDet&w=481&h=800&rs=1"}
    let p4:product ={"id":3 , "name":"Iphone se","quantity":2 , "price":1000 , "img":"https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1587413587555-BPQ9MKZIOZJJJ77IZB45/image-asset.jpeg"}

    this.lest.push(p1);
    this.lest.push(p2);
    this.lest.push(p3);
    this.lest.push(p4);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() {
    throw new Error('Method not implemented.');
  }
}
