import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-paithalaam-yeshuve',
  templateUrl: './video-paithalaam-yeshuve.component.html',
  styleUrls: ['./video-paithalaam-yeshuve.component.css']
})
export class VideoPaithalaamYeshuveComponent implements OnInit {

  video3;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.video3 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6wOKH3hAhA8?autoplay=1');
  }

}
