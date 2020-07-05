import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById('nav-wrap').style.width = "100%";
      } else {
        document.getElementById('nav-wrap').style.width = "80%";
      }
    }
  }

}
