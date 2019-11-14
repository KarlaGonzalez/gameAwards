import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  welcomeTitle = `WE SEE YOU.
  WE RECOGNIZE YOU.
  WE WELCOME YOU.`;

  welcomeText = `Players, Artist, Fans, Creators And Companies In The Video Game Industry!\
  Secure Your Free VIP Spot And Exclusive Perks On The Official Social Networking Platform\
  Built Just For Video Game Culture. `;

  reserveButton = 'Reserve Your Spot Now';

  mediaText = `Don't let your friends miss out!
  Share on social.`

  constructor() { }

  ngOnInit() {
  }

}
