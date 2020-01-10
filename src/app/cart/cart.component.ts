import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items;  
  totalprice;
  checkoutForms;
  thx:boolean = false;

  constructor(
    private cartService:CartService,
    private  formBuilder:FormBuilder) {  
      // holt Bestellliste und Gesamtpreis vom CartService-Methode    
      this.items = this.cartService.getItems();
      this.totalprice = this.cartService.totalPrice();
      // console.log(this.items.lenght,"länge")
      console.log(this.totalprice,"abgezogen cart");
      // Variablen Deklaration für Lieferadresse aus dme Formular
      this.checkoutForms = this.formBuilder.group(  {name:'', adress:''}  );      
  }    

  onSubmit(customerData){    
    console.log(customerData, "Formulardaten")
    if(customerData.name != "" && customerData.adress != ""){      
      // Verbraucher Daten werden an den Server/Backend geschickt
      console.warn("Ihre Bestellung wurde jetz übermittelt", customerData)
      // Löschen der gesamten Bestellung
      this.clearList();
      // Löschen der Zustellungs Informationen
      this.checkoutForms.reset();
      // dankes Text
      this.thx = !this.thx;
    } else{
      alert("bitte beide Felder vollständig ausfüllen");
    }
  }

  clearList(){
    // Bestellliste löschen
    this.items = this.cartService.removeItems();
  }

  clearArticle(orderId){
    // Geasamtpreis anpassen
    this.totalprice = this.totalprice - this.items[orderId].price 
    // Artikel löschen
    this.cartService.removeArticle(orderId);
  }

    
}