import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-yeshu-kristhu-uyirthu',
  templateUrl: './video-yeshu-kristhu-uyirthu.component.html',
  styleUrls: ['./video-yeshu-kristhu-uyirthu.component.css']
})
export class VideoYeshuKristhuUyirthuComponent implements OnInit {

  yeshukristhu;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.yeshukristhu = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b2bTK_DfhCU?autoplay=1');
  }

}
