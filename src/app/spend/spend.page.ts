import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.page.html',
  styleUrls: ['./spend.page.scss'],
})
export class SpendPage implements OnInit {

  constructor(public ts: TransactionService) { }

  ngOnInit() {
  }

  spendOnEcoProducts() {
    this.ts.spendOnEcoProducts()
  }

  spendOnNonEcoProducts() {
    this.ts.spendOnNonEcoProducts()
  }

}
