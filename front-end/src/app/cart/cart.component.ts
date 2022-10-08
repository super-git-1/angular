import { Component, OnInit } from '@angular/core';
import { product } from '../modele/IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
cartItems=[
  // {"id":0 , "name":"Head Phone","quantity":10 , "price":25 , "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"}
];
  constructor() {}


  ngOnInit(): void {
  }

addToCart(product:product){

  let newone:product={
    id:product.id,
    name:product.name,
    quantity:product.quantity,
    price:product.price,
    img:product.img
  }
 this.cartItems.push()
}

}
