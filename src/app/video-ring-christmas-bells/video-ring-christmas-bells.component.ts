import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-ring-christmas-bells',
  templateUrl: './video-ring-christmas-bells.component.html',
  styleUrls: ['./video-ring-christmas-bells.component.css']
})
export class VideoRingChristmasBellsComponent implements OnInit {

  ringchristmas;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ringchristmas = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Pi4vQh7CL7c?autoplay=1');
  }

}
