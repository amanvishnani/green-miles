import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  public transactions: any[]
  private ecoStores: any[] = [
    { name: 'Boho & Hobo', type: 'eco' },
    { name: 'GREEN TOYS', type:'eco' },
    { name: 'ROTHY’S', type:'eco' },
    { name: 'Nurtured Halifax', type:'eco'}
  ]

  private nonEcoStores: any[] = [
    { name: 'Acme Corporation', type: 'non-eco' },
    { name: 'Umbrella Corporation', type: 'non-eco' },
    { name: 'Hooli', type: 'non-eco' }
  ]

  constructor() { 
    this.transactions = []
    this.spendOnEcoProducts()
    this.spendOnNonEcoProducts(new Date(2020, 1, 11))
  }
  
  spendOnEcoProducts(dt?: Date) {    
    setTimeout(()=>{
      let i = Math.floor(Math.random()*4)
      this.transactions.push({
      name: this.ecoStores[i].name,
      type: this.ecoStores[i].type,
      amount: Math.floor(Math.random()*50),
      date: dt || new Date()
      })
    }, 100)
  }
  
  spendOnNonEcoProducts(dt?: Date) {
    let i = Math.floor(Math.random()*3)
    this.transactions.push({
      name: this.nonEcoStores[i].name,
      type: this.nonEcoStores[i].type,
      amount: Math.floor(Math.random()*50),
      date: dt || new Date()
    })
  }
}
