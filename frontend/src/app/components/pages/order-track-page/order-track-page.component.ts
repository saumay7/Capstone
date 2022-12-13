import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css']
})
export class OrderTrackPageComponent implements OnInit {

  order!:Order;
  constructor(activatedRoute: ActivatedRoute,
              orderService:OrderService) {
     const params = activatedRoute.snapshot.params;
     if(!params.orderId) return; // shouldnt do anything if the order id isnt there
     orderService.trackOrderById(params.orderId).subscribe(
      order => {
       this.order = order;
     })

  }

  ngOnInit(): void {
  }

}
