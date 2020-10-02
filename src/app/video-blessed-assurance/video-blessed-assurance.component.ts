import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-blessed-assurance',
  templateUrl: './video-blessed-assurance.component.html',
  styleUrls: ['./video-blessed-assurance.component.css']
})
export class VideoBlessedAssuranceComponent implements OnInit {

  blessedAssurance;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.blessedAssurance = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MGPe5iyvp1Q?autoplay=1');
  }

}