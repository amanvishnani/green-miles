import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-points',
  templateUrl: './green-points.page.html',
  styleUrls: ['./green-points.page.scss'],
})
export class GreenPointsPage implements OnInit {

  constructor() { }

  ngOnInit() {
     // @ts-ignore
     var bar = new ldBar("#tree", {
      "type": 'fill',
      "img": "assets/treeme.svg",
      "value": 65
     });
  }

}
