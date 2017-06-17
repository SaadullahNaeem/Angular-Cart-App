import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products=JSON.parse(localStorage.getItem("products"));
  cart=[];
  total=0;
  show=false;

  constructor() {
      if(this.products){
      if(this.products.length) {
        this.show = true;
        if (JSON.parse(localStorage.getItem("cart")))
          this.cart = JSON.parse(localStorage.getItem("cart"));
        this.total = +localStorage.getItem("total");
      }
      else{
        localStorage.setItem("total", '0');
        localStorage.setItem("cart", null);
      }
      }
      else{
        localStorage.setItem("total", '0');
        localStorage.setItem("cart", null);
      }
    }

  ngOnInit() {
  }

  remove=function (index) {
    var total=0;
    this.cart.splice(index,1);
    for (var j = 0; j < this.cart.length; j++) {
        total+=this.cart[j].price*this.cart[j].quantity;
    }
    this.total=total;

    localStorage.setItem("total", total.toString());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  add=function (value) {
    var present=false;
    var i;
    var total=0;
    for (i = 0; i < this.cart.length; i++) {
        if (this.cart[i].name == value.name && this.cart[i].price == value.price) {
            present=true;
            break;
        }
    }
    if(present){
      this.cart[i].quantity+=1;
    }
    else{
      value={name:value.name,price:value.price,quantity:1};
      this.cart.push(value);
    }

    for (var j = 0; j < this.cart.length; j++) {
        total+=this.cart[j].price*this.cart[j].quantity;
    }
    this.total=total;

    localStorage.setItem("total", total.toString());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }


}
