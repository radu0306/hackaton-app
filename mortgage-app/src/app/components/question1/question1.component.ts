import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.houseImage = '../../../assets/Icon-House.svg';
    this.condoImage = '../../../assets/icon-Condo.svg';
  }

  houseImage = '../../../assets/Icon-House.svg';
  condoImage = '../../../assets/icon-Condo.svg';

  public checkBox(type: string) {
    if (type == "house") {
      this.houseImage = '../../../assets/Icon-House-white.svg';
      this.condoImage = '../../../assets/icon-Condo.svg';

    } else if (type == "condo") {
      this.houseImage = '../../../assets/Icon-House.svg';
      this.condoImage = '../../../assets/icon-Condo-white.svg';
    }
    console.log(type);
  }

  getHouseImage() { console.log(this.houseImage); return this.houseImage; }

  getCondoImage() { return this.condoImage; }

}
