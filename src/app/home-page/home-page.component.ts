import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  public bounding: any;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    this.scroll();
  }

  scroll = (): void => {
    var elem = document.getElementById("landing");
    this.bounding = elem.getBoundingClientRect();
    if (
      this.bounding.top >= 0 && this.bounding.left >= 0 && this.bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && this.bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      console.log('In the viewport!');
      document.getElementById("fab").style.visibility = "hidden";
    } else {
      console.log('Not in the viewport... whomp whomp');
      document.getElementById("fab").style.visibility = "visible";
    }
  };
}
