import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-green-points',
  templateUrl: './green-points.page.html',
  styleUrls: ['./green-points.page.scss'],
})
export class GreenPointsPage implements OnInit {
  bar;
  constructor(public ts: TransactionService) { }
  
  ngOnInit() {
     // @ts-ignore
     this.bar = new ldBar("#tree", {
      "type": 'fill',
      "img": "assets/treeme.svg",
      "value": 0
     });
     this.setGreenScore();
  }

  setGreenScore() {

    let data = this.ts.transactions;
    let target = 1500;
    let score = 0;
    for( let i of data) {
      console.log(i);
      if(i.type == "eco") {
        score += i.amount*2;
      }
    }
    this.bar.set(score*100/target);
  }

}
