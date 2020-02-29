import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  public transactions = [1,2]

  constructor() { 
    this.transactions = [1,2]
  }


  ngOnInit() {
  }

}
