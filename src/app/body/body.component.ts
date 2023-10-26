import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import {abc} from '../../assets/img/test'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BodyComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  entity = { 
    code: "ABC123",
    tag: "<strong> YES</strong>",
    description: "A description of this Entity" 
};

returnText = "<strong> YES</strong>";

  advertisement = [
    {
      sponsor: 'Visons',
      imagePath: '../../assets/img/visions.jpg'},
    {
      sponsor: 'Twitch',
      imagePath: '../../assets/img/twitch.png'},
    {
      sponsor: 'Guinness',
      imagePath: '../../assets/img/guinness.png'},
    {
      sponsor: 'Echo Fox',
      imagePath: '../../assets/img/echo.png'} 
  ];

  faqs = [
    {
      title: 'How do I get an Official Worl Record?',
      description: 'Here´s how the process works in a nutshell. Once you submit proper evidence  (There´s a submission guide for this) od you achieving the record, you achievements in then validated by the ExampleComapany peer review system and propietary adjudication process. From there, assuming it´s legit, we´ll send you a notice making you the new global record holder for that achievement. Ypur record will be added to your profile and your name will be added to the Official Worl Records Database and respective game leaderboard. We will inform via our social channels, in-house news show and other sources. '
    },
    {
      title: 'What types of Achievements Will You Track?',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia'},
    {
      title: 'How can I Submit A World Record?',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia'},
    {
      title: 'What Makes EC The Authority?',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia'},
    {
      title: 'What Can I Expect Once EC Oficially?',
    description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon official'},
    {
      title: 'Why Is This Free... What´s Running The Joint?',
    description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon official'},
    {
      title: 'Do You Have Some Kind Of Ethos Or Mission Statement?',
    description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon official'},
    {
      title: 'What If I´m Not A Gamer, Can I Still Join?',
    description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon official'}
  ];

  tabs = [
    {
      title: 'Instant Tournament',
      imagePath: '../../assets/img/winners.jpg',
      description: `
        Battle your friends for global bragging rights with your every own, customizable instant tournaments
        system. Launch in minutes. Compete on eny game, any device, anywhere in the world (with an internet connection).
        No more arguing with your friends about who´s better at Mario Kart as the truth will live on aour 
        leaderboards forever.
      `
    },
    {
      title: 'Verified Profiles',
      imagePath: '../../assets/img/profiles.png',
      description: `
        Battle your friends for global bragging rights with your every own, customizable instant tournaments
        system. Launch in minutes. Compete on eny game, any device, anywhere in the world (with an internet connection).
        No more arguing with your friends about who´s better at Mario Kart as the truth will live on aour 
        leaderboards forever.
      `
    },
    {
      title: 'Video Game Achievement Recognition',
      imagePath: '../../assets/img/ranking.png',
      description: `
        Battle your friends for global bragging rights with your every own, customizable instant tournaments
        system. Launch in minutes. Compete on eny game, any device, anywhere in the world (with an internet connection).
        No more arguing with your friends about who´s better at Mario Kart as the truth will live on aour 
        leaderboards forever.
      `
    },
    {
      title: 'Ranking And Reputation',
      imagePath: '../../assets/img/instant.png',
      description: `
        Battle your friends for global bragging rights with your every own, customizable instant tournaments
        system. Launch in minutes. Compete on eny game, any device, anywhere in the world (with an internet connection).
        No more arguing with your friends about who´s better at Mario Kart as the truth will live on aour 
        leaderboards forever.
      `
    },
  ]

  accordionTitle = `ExampleCompany is the first and only social networking platform to `

  constructor() { }

  ngOnInit() {
    abc()
    
  }

}
