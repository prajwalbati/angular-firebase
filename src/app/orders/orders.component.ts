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

  hasError: boolean = false;
  errors: any = [];
  hasMessage: boolean = false;

  ngOnInit() {
  }

  addCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index===-1)
      this.coffeeOrder.push(coffee);
    else
      this.coffeeOrder.splice(index, 1);
  }

  isCoffeeSelected = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    return index!==-1;
  }

  // removeCoffee = coffee => {
  //     let index = this.coffeeOrder.indexOf(coffee);
  //     if (index > -1) this.coffeeOrder.splice(index, 1);
  // };

  onSubmit() {
    this.errors = [];
    this.hasError = false;
    this.hasMessage = false;

    this.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.form.value;
    if (!data.orderNumber) {
      this.errors.push("Please add order number");
    }
    if (!data.customerName) {
      this.errors.push("Please add customer name");
    }
    if (data.coffeeOrder.length==0) {
      this.errors.push("Please select orders");
    }
    if (this.errors.length > 0) {
      this.hasError = true;
      return;
    }

    this.ordersService.createCoffeeOrder(data).then(res => {
      this.hasMessage = true;
      this.errors = ["Order submitted successfully"];
      this.resetForm();
     });
  }

  resetForm() {
    this.form.reset();
    this.coffeeOrder = [];
  }

}
