import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-o-sacred-head',
  templateUrl: './video-o-sacred-head.component.html',
  styleUrls: ['./video-o-sacred-head.component.css']
})
export class VideoOSacredHeadComponent implements OnInit {

  osacredhead;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.osacredhead = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/JSG1tw54k-4?autoplay=1');
  }

}
