import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  reserveButton = 'Reserve Your Spot Now';
  reservationsAmount = '10, 000';
  reservationsMessage = ` Limited to the first ${this.reservationsAmount} reservations.
  Official launch estimated for October 2019.`

  constructor() { }

  ngOnInit() {
  }

}
