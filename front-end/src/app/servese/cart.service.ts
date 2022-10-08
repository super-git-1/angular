import { Injectable } from '@angular/core';
import { product } from '../modele/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[]
  constructor() {
    this.cartItemList=[
      {id:0 , name:"Head Phone",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:1 , name:" Phone",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:2 , name:"Head Phone",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:3 , name:"Iphon",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:4 , name:" Phone",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:5 , name:"Labtop",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:6 , name:"Pc",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:7 , name:"Labtop",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:8 , name:"tap",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:9 , name:"Pc",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:10 , name:"tap",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
      {id:10 , name:"Iphon",quantity:10 , price:25 , img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"}
    ]
  }
  getProductData(){
    return this.cartItemList
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
  
    console.log(this.cartItemList)
  }
}
