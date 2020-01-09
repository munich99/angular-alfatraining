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
  checkoutForms;

  constructor(
    private cartService:CartService,
    private  formBuilder:FormBuilder) { 
      //alert("zuerst") (erscheint vom der Methode ngOnInit() )
      this.items = this.cartService.getItems();
      console.log(this.items,"items")

      // Variablen Deklaration für Lieferadresse aus dme Formular
      this.checkoutForms = this.formBuilder.group(  {name:'', adress:''}  );      
    }

    onSubmit(customerData){
      // Verbraucher Daten werden an den Server/Backend geschickt
      console.warn("Ihre Bestellung wurde jetz übermittelt", customerData)
      // Löschen der gesamten Bestellung
      this.clearList();
      // Löschen der Zustellungs Informationen
      this.checkoutForms.reset();
    }

    clearList(){
      // Bestellliste löschen
      this.items = this.cartService.removeItems();
    }
}