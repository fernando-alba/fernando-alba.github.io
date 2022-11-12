import { Component, OnInit } from '@angular/core';
import { youtubeLinks } from './videos';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  // @ts-ignore
  youtubeLinks;

  constructor(private sanitizer: DomSanitizer) {}

  // @ts-ignore
  sanitizeUrl(work) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://' + work + '/'
    );
  }

  ngOnInit() {
    this.youtubeLinks = youtubeLinks.reverse();
  }
}
