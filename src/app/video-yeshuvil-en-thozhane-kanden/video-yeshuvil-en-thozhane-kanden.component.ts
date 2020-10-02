import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-yeshuvil-en-thozhane-kanden',
  templateUrl: './video-yeshuvil-en-thozhane-kanden.component.html',
  styleUrls: ['./video-yeshuvil-en-thozhane-kanden.component.css']
})
export class VideoYeshuvilEnThozhaneKandenComponent implements OnInit {

  yeshuvilen;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.yeshuvilen = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/nr5WmWMWPfQ?autoplay=1');
  }

}
