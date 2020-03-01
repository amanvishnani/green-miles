import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { PopoverController } from '@ionic/angular';
import {  } from "@angular/core"; 
@Component({
  selector: 'app-green-points',
  templateUrl: './green-points.page.html',
  styleUrls: ['./green-points.page.scss'],
})
export class GreenPointsPage implements OnInit {
  bar;
  score = 0;
  constructor(public ts: TransactionService, public popoverController: PopoverController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

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
    let target = 200;
    this.score = 0;
    for( let i of data) {
      if(i.type === "eco")
        this.score += i.amount*2;
    }
    this.bar.set(this.score*100/target);
  }

}

@Component({
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopComponent {
  constructor() {}

  close() {
    // this.viewCtrl.dismiss();
  }
}