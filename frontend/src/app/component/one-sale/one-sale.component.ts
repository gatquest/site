import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-one-sale',
  templateUrl: './one-sale.component.html',
  styleUrls: ['./one-sale.component.css']
})
export class OneSaleComponent  implements OnInit {

  public orders: any[] = [];
  displayedColumns: string[] = ['id', 'created', 'brand', 'image'];

  constructor(
    private auth: AuthService,
    private router: Router,
    private api: ApiService) {
  }

  ngOnInit() {
    this.loadSales();
  }

  loadSales() {
    this.api.getList().subscribe((data: any) => {
      if (data) {
        this.orders = data
        console.log(this.orders)
      }
    })
  }
}
