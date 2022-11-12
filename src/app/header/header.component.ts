import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  animateMenu() {
    const topLine = document.querySelector('#line1');
    const midLine = document.querySelector('#line2');
    const bttmLine = document.querySelector('#line3');
    const accordion = document.querySelector('#accordion');

    if (
      accordion != null &&
      topLine != null &&
      midLine != null &&
      bttmLine != null
    ) {
      topLine.classList.toggle('tilt1');
      midLine.classList.toggle('hide-line');
      bttmLine.classList.toggle('tilt2');
      accordion.classList.toggle('open-accordion');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
