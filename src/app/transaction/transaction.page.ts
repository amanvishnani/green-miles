import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  public transactions: any[]

  constructor(public ts: TransactionService) { 
    this.transactions = ts.transactions
  }


  ngOnInit() {
  }

}
