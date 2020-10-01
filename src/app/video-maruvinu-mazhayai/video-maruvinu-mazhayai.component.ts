import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-maruvinu-mazhayai',
  templateUrl: './video-maruvinu-mazhayai.component.html',
  styleUrls: ['./video-maruvinu-mazhayai.component.css']
})
export class VideoMaruvinuMazhayaiComponent implements OnInit {

  maruvinumazhayai;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.maruvinumazhayai = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Hd36QE1iif4?autoplay=1');
  }

}
