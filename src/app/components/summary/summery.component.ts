import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {



  // this mean this input provided from parent component
  @Input() stock :any;

  constructor() { }

    isPositive() : boolean{
    return (this.stock && this.stock.change> 0 )
  }

    isNegative() : boolean{
        return (this.stock && this.stock.change< 0 )
    }

  ngOnInit() {
  }

}
