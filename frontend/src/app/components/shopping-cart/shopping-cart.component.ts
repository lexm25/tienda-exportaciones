import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  esAdmin!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    if(sessionStorage.getItem('rol') == 'admin'){
      this.esAdmin=true;
    }
    else{
      this.esAdmin=false;
    }
  }

}
