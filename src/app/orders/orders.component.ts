import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import { OrdersService } from "../shared/orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(
    private ordersService: OrdersService
  ) { }

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false)
  });
  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];

  coffeeOrder = [];

  ngOnInit() {
  }

  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
      let index = this.coffeeOrder.indexOf(coffee);
      if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {
    console.log("Submit");

    this.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.form.value;
    this.ordersService.createCoffeeOrder(data)
         .then(res => {
          console.log(res);
             /*do something here....
             maybe clear the form or give a success message*/
         });
  }

}
