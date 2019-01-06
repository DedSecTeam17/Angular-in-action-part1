import { Component, OnInit } from '@angular/core';
import {StockInterFace, StockService} from '../../services/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    stocks: Array<StockInterFace>;
    symbols: Array<string>;
  constructor(private  service:StockService) {
      this.symbols=this.service.get();
  }


    ngOnInit(): void {
        this.loadData();


        console.log(this.service);

    }


    loadData(){
        this.service.load(this.symbols).subscribe(stocks => {
            this.stocks = stocks;
        });
    }
}
