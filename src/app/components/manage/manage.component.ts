import { Component, OnInit } from '@angular/core';
import {StockInterFace, StockService} from '../../services/stock.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {


   symbols : Array<string>;
   Stock : string;
  constructor(private  service: StockService) {
    this.symbols=this.service.get();
  }

  ngOnInit() {
  }


  add(){
    this.symbols=this.service.add(this.Stock.toUpperCase());
  }

    remove(){
        this.symbols=this.service.remove(this.Stock);
    }
}
