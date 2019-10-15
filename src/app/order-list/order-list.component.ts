import { Component, OnInit } from '@angular/core';
import { orderBy } from 'lodash';

import { OrdersService } from "../shared/orders.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  coffeeOrders: any = [];

  constructor(
    private ordersService:OrdersService
  ) { }

  ngOnInit() {
    this.getCoffeeOrders();
  }

  getCoffeeOrders = () =>
    this.ordersService.getCoffeeOrders().subscribe(res => {
      let coffeeOrdersData = res.map(coffeeData => {
        let customData = coffeeData.payload.doc.data();
        customData["id"] = coffeeData.payload.doc.id;
        return customData;
      });
      this.coffeeOrders = orderBy(coffeeOrdersData, ['orderedDate'], ['desc']);
    });

  markCompleted = (data) => this.ordersService.updateCoffeeOrder(data);

  deleteOrder = (data) => this.ordersService.deleteCoffeeOrder(data);

}
