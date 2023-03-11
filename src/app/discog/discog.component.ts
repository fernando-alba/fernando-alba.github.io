import { Component, OnInit } from '@angular/core';
import { Release } from 'src/assets/static/types';
import { albums } from '../../assets/static/albums';
import { singles } from '../../assets/static/singles';

@Component({
  selector: 'app-discog',
  templateUrl: './discog.component.html',
  styleUrls: ['./discog.component.scss'],
})
export class DiscogComponent implements OnInit {
  albums: Release[] = albums.reverse();
  singles: Release[] = singles.reverse();

  constructor() {}

  ngOnInit() {}
}
