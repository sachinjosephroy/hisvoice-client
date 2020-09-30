import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-goin-to-bethlehem',
  templateUrl: './video-goin-to-bethlehem.component.html',
  styleUrls: ['./video-goin-to-bethlehem.component.css']
})
export class VideoGoinToBethlehemComponent implements OnInit {

  goinToBethlehem;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.goinToBethlehem = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/G0eKzSVkYaw?autoplay=1');
  }

}
