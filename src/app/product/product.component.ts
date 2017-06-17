import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name=null;
  price=null;
  products=[]
  show=true;

  constructor() {
    if(JSON.parse(localStorage.getItem("products"))){
     this.products=JSON.parse(localStorage.getItem("products"));
     if(this.products.length){
      this.show=false;
     }
    }
  }

  ngOnInit() {
  }

  remove=function (index) {
    this.products.splice(index,1);
    localStorage.setItem("products", JSON.stringify(this.products));
    if(!this.products.length){
      this.show=true;
    }
  }

  onSubmit=function () {

    var value={name:this.name,price:this.price};
    this.products.push(value);
    localStorage.setItem("products", JSON.stringify(this.products));
    this.name=null;
    this.price=null;
    if(this.products.length){
      this.show=false;
    }
  }
}
