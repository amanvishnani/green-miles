import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-points',
  templateUrl: './green-points.page.html',
  styleUrls: ['./green-points.page.scss'],
})
export class GreenPointsPage implements OnInit {
  bar;
  constructor() { }
  
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
    let data = [{name: "a", type: "eco", value: 20}, {name: "a", type: "eco", value: 20}, {name: "a", type: "non", value: 20}];
    data = data.filter(e => e.type == "eco");
    console.log(data);
    let target = 100;
    let score = 0;
    for( let i of data) {
      score += i.value*2;
    }
    this.bar.set(score*100/target);
  }

}
