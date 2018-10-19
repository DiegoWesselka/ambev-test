import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  products: IProducts[];
  total:number = 0;
  
  constructor() {
    this.products = [
      {
        product_id: 1,
        product_name : "Couvert",
        product_price : 10,
        product_subtotal : 10,
        product_quality : 3
      },
      {
        product_id: 2,
        product_name : "Skol 600ml",
        product_price : 12,
        product_subtotal : 12,
        product_quality : 1
      },
      {
        product_id: 3,
        product_name : "X Salada",
        product_price : 10,
        product_subtotal : 10,
        product_quality : 1
      },
      {
        product_id: 4,
        product_name : "Original 600ml",
        product_price : 15,
        product_subtotal : 15,
        product_quality : 2
      },
      
    ];
   }

  ngOnInit() {
    this.totalPrice();
  }
  
  delproduct(pid){
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products.splice(i,1);
      }           
    }
    this.totalPrice();
  }


  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      const subtotal = this.products[i].product_price * this.products[i].product_quality;
      this.total += (subtotal);
      this.products[i].product_subtotal = subtotal;
    }
  }

  add(pid){
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality += 1;
      }           
    }
    this.totalPrice();
  }

  del(pid){
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality -= 1;
      }           
    }
    this.totalPrice();
  }


}
