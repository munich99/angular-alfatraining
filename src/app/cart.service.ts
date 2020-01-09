import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class CartService {

  items = [];  
  totalprice = 0;  

  constructor(public http:HttpClient) { }

  addToCart(product){
    this.items.push(product);
    let x = this.items.length;
    console.log(this.items[x-1].price,"inhalt länge");
    this.totalprice = this.totalprice + this.items[x-1].price;   
  }

  totalPrice(){
    return this.totalprice;
  }

  getItems(){
    return this.items;
  }

  removeItems(){
    return this.items=[];
  }

  removeArticle(orderId){    
    this.items.splice(orderId,1);
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}