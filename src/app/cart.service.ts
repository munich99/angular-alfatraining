import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(public http:HttpClient) { }

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  removeItems(){
    return this.items=[];
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}