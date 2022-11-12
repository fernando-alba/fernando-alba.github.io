import { Component, OnInit } from '@angular/core';
import { albums } from './albums';
import { singles } from './singles';

@Component({
  selector: 'app-discog',
  templateUrl: './discog.component.html',
  styleUrls: ['./discog.component.scss'],
})
export class DiscogComponent implements OnInit {
  // @ts-ignore
  albums;

  // @ts-ignore
  singles;

  constructor() {}

  ngOnInit() {
    this.albums = albums.reverse();
    this.singles = singles.reverse();
  }
}
