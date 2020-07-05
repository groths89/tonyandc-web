import { Component, OnInit } from '@angular/core';
import { faPinterest, faFacebookSquare, faInstagram, faEtsy } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  faPinterest = faPinterest;
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faEtsy = faEtsy;
  constructor() { }

  ngOnInit(): void {

  }

}
