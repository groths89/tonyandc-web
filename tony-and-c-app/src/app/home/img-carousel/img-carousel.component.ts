import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss']
})
export class ImgCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
  }

  ngOnInit(): void {
  }

}
