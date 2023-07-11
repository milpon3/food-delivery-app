import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css'],
})
export class OrderTrackPageComponent {
  order!: Order;

  constructor(activatedRoute: ActivatedRoute, orderService: OrderService) {
    const params = activatedRoute.snapshot.params;

    if (!params.orderId) return;

    orderService.trackOrderByid(params.orderId).subscribe((order) => {
      this.order = order;
    });
  }
}
